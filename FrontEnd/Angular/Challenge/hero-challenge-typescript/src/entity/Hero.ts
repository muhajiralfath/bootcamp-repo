
class Hero {
    name: String
    hp: number
    mp: number
    baseDamage: number
    constructor(name: String, hp: number, mp: number, baseDamage: number) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.baseDamage = baseDamage;
    }

    getHeal(heal: number): void {
        this.hp += heal
    }

    getHit(damage: number): void {
        this.hp -= damage
    }

    attack(otherHero: Hero): void{
        otherHero.getHit(this.baseDamage)

    }

    heal(otherHero: Hero): void{
        otherHero.getHeal(this.mp / 2)
        this.hp -= (this.mp / 2)
    }
}

export {
    Hero
}