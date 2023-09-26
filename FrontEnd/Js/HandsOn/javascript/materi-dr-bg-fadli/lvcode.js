// Promise
// resolve
// reject

// ciri2 callback yaitu passing function di parameter, dieksekusi di function lain

const isValid = false

const simplePromise = new Promise ((resolve, reject) =>  {
    if (isValid){
        resolve("Ini Resolve respons")
    } else {
        reject("Ini failed response")
    }
})


console.log(simplePromise
    .then(value => console.log(value))
    .catch(value => console.log(value))
    .finally(() => console.log("Finish")))