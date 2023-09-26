// // Declaration function
// function sayHello() {
//     console.log("Hallo world")
// }
//
// sayHello()
//
//
// function sayHelloWithName(name) {
//     console.log(`Hallo world ${name}`)
// }
//
// sayHelloWithName("alfath")
// // function expression
// // const hello = function (){
// //     var bill = 1000
// //     console.log(bill)
// // }
// //
// // console.log(bill)
//
// // arrow function
// const sum = (x, y) => {
//     return x + y;
// }
//
// let hasilJumlah = sum(5, 6)
//
// console.log(hasilJumlah)
//
//
// // rekursif
// function factorial(n) {
//     // Base case: faktorial dari 0 atau 1 adalah 1
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         // Rekursi: faktorial dari n adalah n dikali faktorial(n-1)
//         return n * factorial(n - 1);
//     }
// }
//
// // Contoh penggunaan
// console.log(factorial(5)); // Output: 120
// console.log(factorial(6)); // Output: 720
// console.log(factorial(1)); // Output: 1
// console.log(factorial(10))
//
// // contoh dengan bilangan fibonacci
// function fibonacci(n) {
//     // Base case: Bilangan Fibonacci dari 0 dan 1 adalah dirinya sendiri
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         // Rekursi: Bilangan Fibonacci dari n adalah jumlah dari dua bilangan Fibonacci sebelumnya
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
//
// // Contoh penggunaan
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(5)); // Output: 5 (deret: 0, 1, 1, 2, 3, 5)
// console.log(fibonacci(10)); // Output: 55 (deret: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
//
// // function dengan parameter Opsional
// function panggilSiswa(name, alamat){
//     alamat = alamat || ""
//     console.log(`Siswa dengan nama ${name} dan alamatnya ${alamat}`)
// }
//
// panggilSiswa("nisa")

console.log("enig" && "enigma")

// Truthy & Falsy

// && akan mengembalikan first exp jika firs exp false
console.log(true && "Enigma")

//  || akan mengembalikan firsEcp jika first exp true


// arrow func
const call = () => {
    console.log(arguments)
}
call("This is arguments parameter")

const obj = {
    name : "Fauzan",
    sayHi : () => {
        console.log(this)
    }
}

obj.sayHi()


// function as parameter

function foo(functionParams) {
    console.log("start")
    functionParams()
    console.log("Finish")
}

function pemanggilan(){
    console.log("ini dunction yang dipanggil")
}

foo(pemanggilan)