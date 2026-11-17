
console.log("===== SISTEM KASIR SEDERHANA =====");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data produk
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

const keranjang = [];

// Menampilkan daftar produk
function tampilkanProduk() {
    console.log("\nDAFTAR PRODUK:");

    produk.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.nama} - Rp${item.harga.toLocaleString("id-ID")}`
        );
    });
}

// Memulai input transaksi
function mulaiKasir() {
    tampilkanProduk();

    rl.question(
        "\nMasukkan nomor produk (1-4), atau 0 untuk selesai: ",
        function(pilihan) {

            const nomor = Number(pilihan);

            if (!Number.isInteger(nomor) || nomor < 0 || nomor > 4) {
                console.log("Pilihan tidak valid.");
                mulaiKasir();
                return;
            }

            if (nomor === 0) {
                cetakStruk();
                return;
            }

            const barang = produk[nomor - 1];

            rl.question(
                `Masukkan jumlah ${barang.nama}: `,
                function(jumlahInput) {

                    const jumlah = Number(jumlahInput);

                    if (!Number.isInteger(jumlah) || jumlah <= 0) {
                        console.log("Jumlah harus berupa bilangan bulat positif.");
                        mulaiKasir();
                        return;
                    }

                    keranjang.push({
                        nama: barang.nama,
                        harga: barang.harga,
                        jumlah: jumlah,
                        subtotal: barang.harga * jumlah
                    });

                    console.log("Produk berhasil ditambahkan!");

                    mulaiKasir();
                }
            );
        }
    );
}

// Menghitung dan menampilkan struk
function cetakStruk() {
    if (keranjang.length === 0) {
        console.log("\nBelum ada produk yang dibeli.");
        rl.close();
        return;
    }

    const subtotal = keranjang.reduce(
        (total, item) => total + item.subtotal, 0
    );

    const diskon = subtotal > 500000 ? subtotal * 0.10 : 0;

    const totalBayar = subtotal - diskon;

    console.log("\n========= STRUK PEMBELIAN =========");

    keranjang.forEach(item => {
        console.log(
            `${item.nama} x${item.jumlah} Rp${item.subtotal.toLocaleString("id-ID")}`
        );
    });

    console.log("-----------------------------------");
    console.log("Subtotal: Rp" + subtotal.toLocaleString("id-ID"));
    console.log("Diskon: Rp" + diskon.toLocaleString("id-ID"));
    console.log("Total: Rp" + totalBayar.toLocaleString("id-ID"));
    console.log("===================================");
    console.log("Terima kasih!");

    rl.close();
}

// Menjalankan program
mulaiKasir();
