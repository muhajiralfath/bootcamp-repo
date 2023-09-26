import {Hero} from "../entity/Hero";

interface HeroService {
    createNewHero(hero: Hero): void

    getHeroByName(name: String): Hero

    getAllHero(): Hero[]

    deleteHeroByName(name: String): void

    updateHero(hero: Hero): void

    attak(hero: Hero, otherHero: Hero): void

    heal(hero: Hero, otherHero: Hero): void
}

class HeroServiceImpl implements HeroService {
    heroArr: Hero[] = []

    createNewHero(hero: Hero): void {
        if (hero.name && hero.hp && hero.mp && hero.baseDamage) {
            this.heroArr.push(hero)
        } else {
            throw new Error("Attribut is required, please fill with valid attribute")
        }
    }

    getHeroByName(name: String): Hero {
        const foundHero = this.heroArr.find(h => h.name.toLowerCase() === name.toLowerCase());
        if (foundHero) {
            return foundHero
        } else {
            throw new Error("Hero Not Found")
        }
    }

    deleteHeroByName(name: String): void {
        let hero = this.getHeroByName(name);
        if (hero) {
            let index = this.heroArr.indexOf(hero);
            this.heroArr.splice(index, 1)
            console.log(`Success Delete Hero ${name}`)
        } else {
            throw new Error("Hero Not Found")
        }
    }

    getAllHero(): Hero[] {
        return this.heroArr
    }


    updateHero(hero: Hero): void {
        let index = this.heroArr.findIndex(h => h.name.toLowerCase() === hero.name.toLowerCase());
        console.log(index)
        if (index && index >= 0) {
            this.heroArr[index] = hero
        } else {
            throw new Error("Hero Not Found")
        }
    }

    attak(hero: Hero, otherHero: Hero): void {
        if (otherHero.hp === 0) {
            console.log(`Hero ${otherHero.name} is death, cannot attack ${otherHero.name}`)
        } else if (otherHero.hp <= hero.baseDamage) {
            otherHero.hp = 0
            console.log(`hero ${hero.name} attack hero ${otherHero.name} with ${hero.baseDamage} damage`)
        } else {
            hero.attack(otherHero)
            console.log(`hero ${hero.name} attack hero ${otherHero.name} with ${hero.baseDamage} damage`)
        }
    }

    heal(hero: Hero, otherHero: Hero): void {
        if (otherHero.hp === 0) {
            console.log(`Hero ${otherHero.name} is Death, Cannot heal a dead heroes`)
        } else if (hero.hp < hero.mp) {
            console.log(`Hero ${hero.name} cannot heal because hp less than mp`)
        } else {
            hero.heal(otherHero)
            console.log(`hero ${hero.name} heal hero ${otherHero.name} sebesar ${hero.mp / 2}`)
        }
    }

}

export {
    HeroService, HeroServiceImpl
}