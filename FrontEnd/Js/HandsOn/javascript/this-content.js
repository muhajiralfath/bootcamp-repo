// mengakses data dari object lain

const foo = {
    id: 1,
    name: "foo"
}

function getInfo() {
    console.log(`this id ${this.id}  have name ${this.name}`)
}
// apply , bisa menggunakan cara lain yaitu call, bind
getInfo.apply(foo)

// objects bersifat mutable
const foo2 = foo

foo.name = "Goo"

console.log(foo)
console.log(foo2)

// cara agar object immutable
// cara 1 menggunakan spread operator

const foo3 = {...foo}

// cara 2 menggunakan object assign

const foo4 = Object.assign({}, foo)
foo4.name = "fauzan"

console.log(foo4)
console.log(foo)