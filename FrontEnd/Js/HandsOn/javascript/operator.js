let x = 10;
let y = 5;

// Operator penugasan
let a = x + y; // a = 15
let b = x - y; // b = 5
let c = x * y; // c = 50
let d = x / y; // d = 2
let e = x % y; // e = 0

// Operator penugasan gabungan
a += 2; // a = a + 2, a sekarang 17
b -= 3; // b = b - 3, b sekarang 2
c *= 3; // c = c * 3, c sekarang 150
d /= 2; // d = d / 2, d sekarang 1
e %= 3; // e = e % 3, e sekarang 0


// operator perbandingan
let j = 5;
let k = 10;
let l = "5";

// Operator perbandingan
console.log(j == k);   // false (nilai tidak sama)
console.log(j === k);  // false (nilai dan tipe data tidak sama)
console.log(j != k);   // true (nilai tidak sama)
console.log(j !== k);  // true (nilai dan tipe data tidak sama)

console.log(j == l);   // true (nilai sama, JavaScript mengabaikan tipe data)
console.log(j === l);  // false (nilai sama, tetapi tipe data berbeda)

console.log(j > k);    // false (5 tidak lebih besar dari 10)
console.log(j < k);    // true (5 lebih kecil dari 10)
console.log(j >= k);   // false (5 tidak lebih besar atau sama dengan 10)
console.log(j <= k);   // true (5 lebih kecil atau sama dengan 10)


// Operator logika
let f = true;
let g = false;

let h = f && g; // h = false (AND logical operator)
let i = f || g; // i = true (OR logical operator)
let j = !f;     // j = false (NOT logical operator)

// Menggabungkan beberapa operator penugasan dan logika
let k = 7;
k += 4; // k = k + 4, k sekarang 11
k *= 2; // k = k * 2, k sekarang 22
k -= 6; // k = k - 6, k sekarang 16

let l = k > 10 && f; // l = true (true && true = true)
let m = k > 20 || g; // m = false (false || false = false)
