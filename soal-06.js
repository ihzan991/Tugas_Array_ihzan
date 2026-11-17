
console.log("===== SOAL 6 =====");

const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan semua nilai
console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi dan terendah
const tertinggi = Math.max(...nilai);
const terendah = Math.min(...nilai);

// Menghitung rata-rata
const total = nilai.reduce((a, b) => a + b, 0);
const rataRata = total / nilai.length;

// Menghitung mahasiswa yang lulus
const mahasiswaLulus = nilai.filter(n => n >= 75);

console.log("Nilai tertinggi:", tertinggi);
console.log("Nilai terendah:", terendah);
console.log("Rata-rata:", rataRata);
console.log("Jumlah mahasiswa lulus:", mahasiswaLulus.length);
