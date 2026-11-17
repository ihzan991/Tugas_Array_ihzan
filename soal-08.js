
console.log("===== SOAL 8 =====");

// Membuat object produk
const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

// Menampilkan nama dan harga
console.log("Nama produk:", produk.nama);
console.log("Harga produk: Rp" + produk.harga);

// Mengubah stok
produk.stok = 5;

// Menambahkan properti merek
produk.merek = "Lenovo";

// Menampilkan seluruh object
console.log("Data produk terbaru:");
console.log(produk);
