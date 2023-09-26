const stock = {
    coffe: 100,
    water: 100
}

const orderDrink = (order) => {
    console.log("order start")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order === 'tea') {
                reject("order not found")
            } else {
                resolve(`order ${order} accepted`)
            }
        }, 1000)
    })
}

const checkStock = (order) => {
    console.log("Proccees check stock here ....")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.coffe > 0 && stock.water > 0) {
                resolve(`Processing order ${order}`)
            } else {
                reject(`stock is empety`)
            }
        }, 1000)
    })
}

const drink = (order) => {
    console.log(`order will be arrived`)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Ready to drink`)
        }, 1000)
    })
}

const cookWater = () => {
    console.log('start cook water ...')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done cook the water, ready to use")
        }, 5000)
    })
}

const drillCoffe = () => {
    console.log('start drill coffe ...')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done drill the coffe, ready to use")
        }, 4000)
    })
}

const drinkCoffe = (order) => {
    orderDrink(order)
        .then(() => {
            return checkStock(order)
        })
        .then(() => {
            return Promise.all([cookWater(), drillCoffe()])
        })
        .then(resultArray => {
            resultArray.forEach(result => {
                console.log(result)
            })
        })
        .then(() => {
            return drink(order)
        })
        .then(result => {
            console.log(result); // Cetak pesan dari drink()
        })
        .catch(reason => console.log(reason))
}

