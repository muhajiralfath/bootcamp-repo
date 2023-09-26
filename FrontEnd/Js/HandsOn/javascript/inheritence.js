class Hewan{
    constructor(name, leg) {
        this.name = name;
        this.leg = leg
    }

    berjalan(){
        console.log(this.name + " bisa berjalan")
    }
}

class Kucing extends Hewan{
    constructor(name = "Heru", leg) {
        super(name, leg);
    }
    ayoJalan(){
        console.log(`ayo jalan ${this.name} wahai kucing berkaki ${this.leg}`)
    }
}

const tom = new Kucing("Kucing", 4);
tom.berjalan()
console.log(tom.name)
tom.ayoJalan()
console.log(tom.leg)