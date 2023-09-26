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

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Ready to drink`)
        }, 1000)
    })
}

const drinkCoffe = (order) => {
  orderDrink(order)
      .then(result => {
          console.log(result)
          return checkStock(order)
  })
      .then(result => {
          console.log(result)
          return drink(order)
      })
      .then(result => {
          console.log(result)
      })
      .catch(reason => console.log(reason))
}

drinkCoffe("Americano")