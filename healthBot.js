const healthBotResponses = {
    "sağlık nedir?": "Sağlık, bedensel, zihinsel ve sosyal yönden tam bir iyilik halidir. Sadece hastalık veya sakatlık yokluğu değil, fiziksel, zihinsel ve sosyal açıdan tam bir iyilik hali olarak tanımlanır.",
    "sağlıklı bir diyet nasıl olmalıdır?": "Sağlıklı bir diyet, dengeli ve çeşitli besinler içermelidir. Meyve, sebze, tam tahıllar, protein kaynakları ve sağlıklı yağlar tüketilmelidir. İşlenmiş gıdalardan ve şekerli içeceklerden kaçınılmalıdır.",
    "günde kaç litre su içmeliyim?": "Günlük su tüketimi kişinin yaşına, cinsiyetine, kilosuna ve aktivite düzeyine bağlıdır. Genel olarak, yetişkin bir erkek için yaklaşık 3.7 litre, yetişkin bir kadın için ise yaklaşık 2.7 litre su içilmesi önerilir.",
    "düzenli egzersiz yapmanın faydaları nelerdir?": "Düzenli egzersiz yapmak, kalp ve damar sağlığını iyileştirir, kilo kontrolüne yardımcı olur, kas ve kemik sağlığını güçlendirir, stresi azaltır, ruh halini düzenler ve yaşam süresini uzatır.",
    "sigara içmenin zararları nelerdir?": "Sigara içmek birçok sağlık sorununa neden olabilir. Bunlar arasında kalp hastalıkları, akciğer hastalıkları, kanser, inme, kronik bronşit ve diğer solunum yolu hastalıkları bulunur.",
    "alkolün sağlık üzerindeki etkileri nelerdir?": "Aşırı alkol tüketimi birçok sağlık sorununa yol açabilir. Bunlar arasında karaciğer hastalıkları, beyin hasarı, bağışıklık sistemi zayıflığı, kanser riski artışı ve bağımlılık bulunur."
    
};


const question = "düzenli egzersiz yapmanın faydaları nelerdir?";
const answer = healthBotResponses[question.toLowerCase()]; 
if (answer) {
    console.log("Cevap:", answer);
} else {
    console.log("Üzgünüm, bu sorunun cevabını bilmiyorum.");
}