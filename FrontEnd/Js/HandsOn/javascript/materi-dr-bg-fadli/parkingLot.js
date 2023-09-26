class Car{
    constructor(nopol, pemilik) {
        this.nopol = nopol
        this.pemilik = pemilik
    }
}

class ParkingLot{
    constructor(capacity) {
        // current capcity
        this.remaining = capacity
        // kumpulan mobil yang sudah terparkir
        this.parkedCars = []
    }

    park(newCar){
        return new Promise((resolve) => {
            setTimeout(() => {
                if (newCar.nopol && newCar.pemilik){
                    // jika sudah terparkir maka tidak bisa terparkir
                    let carFound = this.parkedCars.find(c => c.nopol === newCar.nopol);
                    if (carFound){
                        resolve("Mobil sudah terparkir")

                    }
                    // jika kapasitas penuh maka tidak bisa terparkir
                    if (this.remaining === 0){
                        resolve("Mohon maaf parkir sudah penuh")

                    }

                    this.parkedCars.push(newCar)
                    this.remaining--
                    resolve(`Mobil ${newCar.pemilik} dengan nopol ${newCar.nopol} sudah terparkir `)

                }
            }, 3000)
        })
    }

    leave(nopol){
        return new Promise(resolve => {
            setTimeout(() => {
                // cek nopol jika string kosong
                if (!nopol){
                    resolve("Nopol harus diisi")
                    return
                }

                // mencari mobil berdasarkan nopol
                let carFound = this.parkedCars.find(car => car.nopol === nopol)
                if (!carFound){
                    resolve(`Mobil dengan nopol ${nopol} tidak ditemukan`)
                    return;
                }
                // line ini memiliki kondisi mobil ditemukan
                this.parkedCars = this.parkedCars.filter(car => car.nopol !== carFound.nopol)
                this.remaining++
                resolve(`Mobil dengan nopol ${carFound.nopol} sudah keluar`)
            }, 1500)
        })
    }

    check(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this)
            }, 5000)
        })
    }
}

const enigmaPark = (capacity) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let lot = new ParkingLot(capacity)
            console.log(`Tempat parkir berhasil dibuat dengan kapasitas ${capacity} kendaraan`)
            resolve(lot)
        })
    })

}

const checkParking = async () => {

    let lot =await enigmaPark(5)
    let newCarPark = await lot.park(new Car("001", "Heru"));
    console.log(newCarPark)

    newCarPark = await lot.leave("001")
    console.log(newCarPark)

}

checkParking()