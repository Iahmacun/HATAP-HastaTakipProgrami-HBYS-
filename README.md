<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HATAP - Hasta Takip Programı</title>
    
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

 <img src="https://res.cloudinary.com/dzo9wgalo/image/upload/v1724844472/Screenshot_9_okf489.png" alt="HATAP Programı Görseli">

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
