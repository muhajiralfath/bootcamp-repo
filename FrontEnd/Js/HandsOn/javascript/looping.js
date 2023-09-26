let animal = ["kucing", "ayam", "kambing"]

// for (let anim of animal) {
//     console.log(anim)
// }
//

animal.forEach(value => console.log(value))

console.log(animal)

animal.map(value => {
    let newValue = "hewan " + value;
    console.log(newValue)
})

