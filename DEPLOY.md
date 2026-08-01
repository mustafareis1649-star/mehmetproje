# Vercel'e Deploy Etme

## 1) Vercel'de yeni proje oluştur
- vercel.com → New Project
- "Import" ile bu klasörü (veya bunu yüklediğin GitHub reposunu) seç

## 2) Ayarlar (Vercel genelde otomatik algılar, ama emin olmak için)
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 3) Deploy
Deploy'a bas ve bekle. `vercel.json` artık projede olduğu için
(react-router kullanan sayfalar için "her adresi index.html'e yönlendir"
kuralı) site tüm sayfalarda (fotoğraf editörü, video editörü, PDF araçları vb.)
doğru açılacak.

## Önemli: dosyaları TEK TEK kopyalama
Bundan sonra bir güncelleme gönderdiğimde, sana ya "değişen dosyalar" zip'i
ya da "tam proje" zip'i vereceğim. **Tam proje zip'i** gönderdiysem, onu
mevcut klasörünün YERİNE koy (eskisini sil, yenisini aç) — üzerine
kopyalama, karıştırmadan kaçınmak için. Sadece "değişen dosyalar" zip'i
gönderdiysem, o zaman içindeki dosyaları aynı isim/yol ile projenin
üzerine kopyala.
