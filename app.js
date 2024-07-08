import express from 'express'
import nunjucks from 'nunjucks'
import { DateTime } from "luxon"
import cookieSession from 'cookie-session'


import {User, trackData, sequelize, Op, Doktormsg,} from './db.js'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'




AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
})

// DATABASE SYNC
try { 
    await sequelize.authenticate()
    
    await sequelize.sync({ alter: true })
    console.log("All models were synchronized successfully.")

    // SUPERADMIN
    await User.findOrCreate({ 
        where: {
            username: 'admin'
        }, 
        defaults: { 
            username: 'admin', 
            password: 'admin',
            userType: 1,
            firstname: 'Admin',
            lastname: 'User',
            age: '1'
        } 
    })
} catch (error) {
    console.log(error)
}

const app = express()

const admin = new AdminJS({resources: [User]})
const adminRouter = AdminJSExpress.buildRouter(admin)

const env = nunjucks.configure('./', {
    autoescape: true,
    express: app
});

const date = function(date) {
    const dt = DateTime.fromISO(date)
    return dt.toFormat('dd/MM/yyyy HH:mm')
}

env.addFilter('date', date)

app.use(cookieSession({
  name: 'session',
  secret: 'akdjnckdyrmcbd5f52ddjdjd',

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    if (req.path == '/login') {
        next()
        return
    }
    
    if (!req.session.user) {
        res.redirect('/login')
    }else{

        // protect adminjs
        if ((req.path.startsWith('/admin')) && (req.session.user.userType !== 1)) {
            res.redirect('/')
            return
        }

        next()
    }
}) 


app.use(admin.options.rootPath, adminRouter)

app.get('/', async (req, res) => {
    
    const user = req.session.user.id
    const data = await trackData.findAll({
        where: {user},
        raw: true
    })

    const ctx = {user: req.session.user, data}
    
    res.render('xcontent.njk', ctx)
})

app.post('/', async (req, res) => {
    
    const seker = req.body.seker
    const tansiyon = req.body.tansiyon
    const ates = req.body.ates
    const saturasyon = req.body.saturasyon
    const nabiz = req.body.nabiz


    const user = req.session.user.id

    const record = await trackData.create({seker, tansiyon, ates, nabiz, saturasyon, date: DateTime.now(), user });

    const data = await trackData.findAll({
        where: {user},
        raw: true
    })
    const datamsg = await Doktormsg.findAll({

        raw: true
    })

    const ctx = {user: req.session.user, data, datamsg}
    
    res.render('xcontent.njk', ctx)
})

app.post('/', async (req, res) => {
    
    const seker = req.body.seker
    const tansiyon = req.body.tansiyon
    const ates = req.body.ates
    const saturasyon = req.body.saturasyon
    const nabiz = req.body.nabiz


    const user = req.session.user.id

    const record = await trackData.create({seker, tansiyon, ates, nabiz, saturasyon, date: DateTime.now(), user });

    const data = await trackData.findAll({
        where: {user},
        raw: true
    })


    const ctx = {user: req.session.user, data, }
    
    res.render('xcontent.njk', ctx)
})


app.get('/login', (req, res) => {
    res.render('xlogin.njk')
})

//login endpoint

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    

    try {
        const user = await User.findOne({
            where: {
                username: username,
                password: password
            },
            raw: true
        });

        if (!user) {
            console.log('Kullanıcı adı veya şifre yanlış!');
            res.render('xlogin.njk', { error: 'Kullanıcı adı veya şifre yanlış!' });
            return;
        }
        console.log(user)
        if (user.username === 'admin' && user.password === 'admin') {
            req.session.user = user;
            res.redirect('/admin'); 
        } else if (user.userType === 3) {             
            req.session.user = user;
           // res.render('hastabilgi.njk');
           res.redirect('/hasta')
        } else {
            req.session.user = user;
            res.redirect('/');
        }
    } catch (error) {
        console.error('Giriş sırasında bir hata oluştu:', error);
        res.render('xlogin.njk', { error: 'Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.' });
    }
});


app.get('/login', (req, res) => {
    res.render('register.njk')
})


app.get('/logout', (req, res) => {
    req.session=null
    res.redirect('/login')
})

app.get('/delete/:id', async (req, res) => {
    const user = req.session.user.id
    const id = parseInt(req.params['id'])

    if (id) {
        console.log('DELETE ' + id)
        
        try {
            await trackData.destroy({
                where: {
                    [Op.and]: [
                        { user },
                        { id }
                    ]
                }
            })

            res.sendStatus(200)

        } catch (error) {
            console.log(error)
            res.sendStatus(200)
        }
    }

})


app.get('/hasta', async (req, res) => {
    const userlist = []
    const data = await trackData.findAll({
        attributes: ['id','tansiyon', 'seker', 'nabiz', 'saturasyon', 'ates', 'date','user'],
        raw: true
    });
    //console.log("***")
    data.forEach((trackData) => {

        const userid = trackData.user
        if (!userlist.includes(userid)){
            userlist.push(userid)
        }
    });
    const userdata = []
    const asyncRes = await Promise.all(userlist.map(async (userid) => {

        const user = await User.findOne({
            where: {id:userid},
            raw: true
        })
        userdata.push(user)


    }));
   
    console.log("**")
    console.log(userdata)
    
  



    const ctx = {data:userdata};
    //console.log(ctx)
    res.render('hastaisim.njk', ctx);
});



app.get('/hastabilgi/:id', async (req, res) => {
    const id = parseInt(req.params['id'])

    //trackdatanın içineki kayıtları çek id=userid
    const data = await trackData.findAll({
        where: { user:id },
        raw: true
    });
        const data2 = await User.findAll({
            where: {id:id },
            raw: true
    });
    //kayıtları tamplateye bas
    const ctx = {data, data2};
    res.render('hastabilgi.njk', ctx);

})

app.post('/send-message', async (req, res) => {
    
    try {
        const { message } = req.body; 
        const userId = req.body.user; 

 
        await Doktormsg.create({ date: DateTime.now(), message, user: userId }); 


        res.redirect('/hasta');
        
    } catch (error) {
        console.error('Mesaj kaydedilemedi:', error);
        res.status(500).send('Mesaj kaydedilemedi');
    }
    
});


import bodyParser from 'body-parser';
import { Messages } from 'openai/resources/beta/threads/messages.mjs'


app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', async (req, res) => {
    try {
        const { new_username, new_password, userType, firstname, lastname, age } = req.body;

        // Verileri konsola yazdır
       /* console.log("Yeni Kullanıcı Adı:", new_username);
        console.log("Yeni Şifre:", new_password);
        console.log("Şifreyi Onayla:", confirmPassword);
        console.log("Kullanıcı Türü:", userType);
        console.log("İsim:", firstname);
        console.log("Soyisim:", lastname);
        console.log("Yaş:", age);
*/

        
        const newUser = await User.create({
            username: new_username,
            password: new_password,
            userType: userType,
            firstname: firstname,
            lastname: lastname,
            age: age
        });

        res.status(201).send('Kullanıcı başarıyla kaydedildi.');
    } catch (error) {
        console.error('Kayıt işlemi başarısız oldu:', error);
        res.status(500).send('Kayıt işlemi başarısız oldu.');
    }
});

app.get('/api/messages', async (req, res) => {
    try {
        const datamsg = await Doktormsg.findAll({
            raw: true
        });

        res.json(datamsg);
    } catch (error) {
        console.error('Mesajlar alınamadı:', error);
        res.status(500).send('Mesajlar alınamadı');
    }
});

app.get('/userinfo', (req, res) => {
    const username = req.query.username;
    const query = `SELECT * FROM users WHERE username = ?`;

    db.get(query, [username], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Database error');
            return;
        }

        if (!row) {
            res.status(404).send('User not found');
            return;
        }

  
        res.render('hastabilgi.njk', {
            username: row.username,
            userInfo: {
                tansiyon: row.tansiyon,
                seker: row.seker,
                ates: row.ates,
                saturasyon: row.saturasyon,
                nabiz: row.nabiz
            }
        });a
    });
});



const appPort = 2024  
app.listen(appPort, () => {
    console.log(`Server listen as port: ${appPort}`);
})

