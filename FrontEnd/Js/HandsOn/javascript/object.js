const people = new Object()


const orang = {};


const user = {
    firstName: "Alfath",
    lastName: "Joz",
    isActive: true,

    sayHello :  function (){
    console.log("hai")
    }

}

// mengakses properti dari object

console.log(user.firstName);
console.log(user.sayHello)

//modifikasi properti
user.firstName = "new name";
user.address = "jakarta;";
user.run = function (){
    return `${this.firstName}`
}

console.log(user.run())
console.log(user)

// delete properti
delete user.isActive;








