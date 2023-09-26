/*
// callback

console.log('start')
setTimeout(() =>  console.log("proses 1"), 100)
setTimeout( () =>  console.log("proses 2"), 150)
setTimeout(() =>  console.log("proses 3"), 50)

console.log("finish")

const sayHello = () => {
    console.log("prose dari say hello")
    let name = null

    setTimeout(() => {
        name = "fauzan"
        name = `hello i am ${name}`
    }, 100)

    return name
}

console.log("mulai")
console.log(sayHello())
console.log("selesai")
*/

const haloo = (callback) => {
    console.log(`ini mulai dari proses hallo`)
    let name = null
    setTimeout(() => {
        name = "edy"
        callback()
    }, 100)
}

const cetak = () => {
    console.log("Dipanggil lagii")
}

console.log("starting")
console.log(haloo(cetak))
console.log("end")

const pesanMinuman = (minuman, kirimPesan) => {
    console.log("pesanan dalam proses")
    setTimeout(() => {
        if (minuman == "teh"){
            kirimPesan("pesanan tidak ada")
        } else {
            setTimeout(() => {
                console.log("pesanan dibuat")
                kirimPesan(null, `${minuman}`)
            }, 200)
        }
    }, 1000)

}

const minum = (error, output) => {
    if (error){
        console.log("minuman tidak ada")
    } else {
        console.log(`terima kasih, silahkan diminum, ${output}`)
    }
}

pesanMinuman("milo", minum)