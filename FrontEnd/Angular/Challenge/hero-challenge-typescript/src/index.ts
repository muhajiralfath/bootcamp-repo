import {Hero} from "./entity/Hero";
import {HeroService, HeroServiceImpl} from "./service/HeroService";

let layla = new Hero("layla", 100, 80, 50);

let miya = new Hero("miya", 100, 50, 80);

const heroService : HeroService = new HeroServiceImpl();

heroService.createNewHero(layla)
heroService.createNewHero(miya)

let allHero = heroService.getAllHero();
console.log(allHero)
//
// heroService.attak(layla, miya)
// allHero = heroService.getAllHero()
// console.log(allHero)
// heroService.heal(layla, miya)
//
allHero = heroService.getAllHero()
console.log(allHero)
//
// heroService.deleteHeroByName("layla")
//
// allHero = heroService.getAllHero()
// console.log(allHero)
miya.name = "Mio"


console.log()
allHero = heroService.getAllHero()
console.log(allHero)