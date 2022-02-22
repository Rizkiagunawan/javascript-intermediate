// 1. Apa itu synchronous? hasil yang didapatkan dari kode sesuai dengan urutan yang kita tulis.

// 2. Apa itu asynchronous? Asyncrhonous adalah proses pengeksekusian kode yang tidak sesuai
///dengan urutan yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// Bisa, diterapkan untuk menampilkan konten agar menunggu konten lain. Contohnya konten produk di website media online
// contohnya detik.com saat kita melihat berita-berita secara random dan akan terjadi loading kemudian akan muncul gambar konten yang tidak
///berurutan, hal itu di sebabkan karena proses codenya sudah terbaca lebih dulu.

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
///console.log 01- pertama menampilkan
///first log:  1
///first log:  2
///first log:  3
///first log:  4
///first log:  5
///console.log 02-kedua menampilkan second log:  6

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/// ada ketidak samaan,  tipe data i terlalu global sehingga i yang diakses pada second console adalah 6 yaitu i hasil setelah loop selesai
/// yaitu 5 dan ditambah 1 karena i++ itu terjadi karena ada setTimeout() dimana code akan di delay selama 1 detik dan dijalankan 
///dibackground setelah loop selesai dieksekusi sehingga i nya bukan hasil iterasi looping.

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }
  console.log("------------------------------PERBAIKAN---------------------------------------")
  
  //hasil perbaikan
  for (let i = 1; i <= 5; i++) {
    console.log('first log: ', i);//1 pertama
    setTimeout(() => console.log('second log:', i),100); // 02 - Kedua
  
  }