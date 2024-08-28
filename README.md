<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HATAP - Hasta Takip Programı</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        header {
            background-color: #007bff;
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        section {
            margin: 20px 0;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        section h2 {
            color: #007bff;
            margin-top: 0;
        }

        ul, ol {
            margin-left: 20px;
        }

        img {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }

        footer {
            text-align: center;
            padding: 10px 0;
            background-color: #007bff;
            color: white;
            margin-top: 20px;
        }

        code {
            background-color: #f8f8f8;
            padding: 2px 5px;
            border-radius: 3px;
        }

        pre code {
            display: block;
            padding: 10px;
            background-color: #e8e8e8;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>

<body>
    <header>
        <h1>HATAP - Hasta Takip Programı</h1>
        <p>HATAP, sağlık kuruluşlarında hastaların takibi için geliştirilmiş bir sistemdir. Bu sistem, hastaların kaydedilmesi, durumlarının güncellenmesi, raporlanması ve hasta ile doktor arasında anlık etkileşim sağlanması gibi işlevleri sağlar. Ayrıca, uzak mesafede veya hastaneye ulaşım zorluğu olan kişilere kolaylıkla erişim sağlayarak hastanelerdeki yoğunluğu azaltmaya da yardımcı olur.</p>
    </header>

    <section>
        <h2>Özellikler</h2>
        <ul>
            <li><strong>Hasta Kaydı:</strong> Yeni hastaların sisteme kaydedilmesi.</li>
            <li><strong>Hasta Takibi:</strong> Hastaların durumlarının güncellenmesi ve takip edilmesi.</li>
            <li><strong>Raporlama:</strong> İstatistiklerin ve raporların oluşturulması.</li>
            <li><strong>Anlık Etkileşim:</strong> Hasta ile doktor arasında anlık iletişim sağlanması.</li>
            <li><strong>Uzaktan Erişim:</strong> Uzak mesafede veya hastaneye ulaşım zorluğu olan kişilere kolaylıkla erişim sağlanması.</li>
            <li><strong>Yoğunluk Azaltma:</strong> Hastanelerdeki yoğunluğun azaltılmasına yardımcı olacak özellikler.</li>
        </ul>
    </section>

    <img src="https://media.discordapp.net/attachments/653197194060365834/1250114659227537419/image.png?ex=668d5c00&is=668c0a80&hm=133f388747ef4d2c9aa650ab37fa2811e56a36e2995965532c57ab8d983299ad&=&format=webp&quality=lossless" alt="HATAP Programı Görseli">

    <section>
        <h2>Kurulum</h2>

        <h3>Gereksinimler</h3>
        <p>Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gereklidir:</p>
        <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
        </ul>

        <h3>Kurulum Adımları</h3>
        <ol>
            <li><strong>Projeyi İndirme:</strong>
                <pre><code>git clone https://github.com/Iahmacun/HATAP-HastaTakipProgrami.git
cd HATAP-HastaTakipProgrami</code></pre>
            </li>
            <li><strong>Bağımlılıkları Yükleme:</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Veritabanını Ayarlama:</strong> MongoDB'yi başlatın ve bağlantı ayarlarını yapın.</li>
            <li><strong>Projeyi Başlatma:</strong>
                <pre><code>node app.js</code></pre>
            </li>
        </ol>
        <p>Bu adımları tamamladıktan sonra, projeniz <code>http://localhost:3000</code> adresinde çalışacaktır.</p>
    </section>

    <section>
        <h2>Katkıda Bulunma</h2>
        <ol>
            <li>Projeyi fork edin (<code>https://github.com/Iahmacun/HATAP-HastaTakipProgrami.git</code>).</li>
            <li>Yeni özellikler ekleyin veya hataları düzeltin.</li>
            <li>Değişikliklerinizi commit edin (<code>git commit -am 'Yeni özellik: ...'</code>).</li>
            <li>Bir pull request açın.</li>
        </ol>
    </section>

    <footer>
        <p><strong>Lisans:</strong> Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için <code>LICENSE</code> dosyasına bakınız.</p>
    </footer>
</body>

</html>
