
console.log("===== SOAL 9 =====");

// Data mahasiswa
const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Mencari mahasiswa lulus
const lulus = mahasiswa.filter(m => m.nilai >= 75);

// Mencari mahasiswa tidak lulus
const tidakLulus = mahasiswa.filter(m => m.nilai < 75);

// Mengurutkan nilai dari tertinggi
const urutanNilai = [...mahasiswa].sort(
    (a, b) => b.nilai - a.nilai
);

console.log("Mahasiswa lulus:", lulus);
console.log("Mahasiswa tidak lulus:", tidakLulus);
console.log("Jumlah mahasiswa lulus:", lulus.length);
console.log("Urutan nilai tertinggi:", urutanNilai);
