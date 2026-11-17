
console.log("===== SOAL 2 =====");

const hargaBarang = 25000;
const jumlahBarang = 4;
const diskonPersen = 10;

// Menghitung total sebelum diskon
const totalSebelumDiskon = hargaBarang * jumlahBarang;

// Menghitung diskon
const diskon = totalSebelumDiskon * diskonPersen / 100;

// Menghitung total pembayaran
const totalBayar = totalSebelumDiskon - diskon;

console.log("Harga barang:", hargaBarang);
console.log("Jumlah barang:", jumlahBarang);
console.log("Total sebelum diskon: Rp" + totalSebelumDiskon);
console.log("Diskon: Rp" + diskon);
console.log("Total pembayaran: Rp" + totalBayar);
