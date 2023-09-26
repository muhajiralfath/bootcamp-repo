let tugas = 85
let uts = 90;
let uas = 100;

let totalNilai = (tugas * 25 /100) + (uts * 30 / 100) + (uas * 45 /100)
let nilai

if (totalNilai >= 80){
    nilai = "A";
} else if (totalNilai >= 70){
    nilai = "B";
} else if (totalNilai >= 55){
    nilai = "C";
} else if (totalNilai >= 40){
    nilai = "D"
} else {
    nilai = "E"
}
console.log(`Nilai ${totalNilai} dengan hasil akhir adalah ${nilai}`)