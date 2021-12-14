import Cat from "./implementation/cat.js";
import Cage from "./implementation/cage.js";
import Shelter from "./implementation/shelter.js";
import Owner from "./implementation/owner.js";
const tetris = new Cat("catI", 2010, "homeless", 4);
const mint = new Cat("catII", 2021, "british", 4);
const murlo = new Cat("catIII", 2013, "homeless", 4);
const murzika = new Cat("catIV", 2010, "british", 4);
const murita = new Cat("catV", 2016, "homeless", 4);
const muridze = new Cat("catVI", 2018, "siberian", 4);
const tusita = new Cat("catVII", 2017, "shorthair", 4);
const tobika = new Cat("catVIII", 2015, "homeless", 4);
const kolita = new Cat("catIX", 2020, "british", 4);
const cague = new Cage("cageI");
const cague2 = new Cage("cageII", [mint]);
const cague3 = new Cage("cageIII", [murlo, murzika, murita]);
const cague4 = new Cage("cageIV", [muridze, tusita]);
const cague5 = new Cage("cageV");
const natahinDom = new Shelter("NatahinDom", [cague, cague2, cague3, cague4]);
const nataha = new Owner("Nataha", 1993, natahinDom);
console.log(natahinDom.cages);
console.log(natahinDom.findCageByID(cague3.id));
console.log(natahinDom.cages);
console.log(tetris);
cague5.addAnimal(tobika);
cague5.addAnimal(kolita);
console.log(cague5.animals);
console.log(cague3.animals);
console.log(cague3.id);
mint.hungry();
murita.hungry();
kolita.hungry();
cague2.dirty();
cague4.dirty();
cague5.dirty();
natahinDom
    .dirtyCagesAsync()
    .then((dirtyCages) => {
    console.log("1st promise has been resolved. We got some filthy cages for you:", dirtyCages);
    return natahinDom.dirtyCagesAsync();
})
    .then((dirtyCages) => {
    console.log("2nd promise has been resolved. We got some filthy cages for you:", dirtyCages);
    return natahinDom.dirtyCagesAsync();
})
    .then((dirtyCages) => {
    console.log("3rd promise has been resolved. We got some filthy cages for you:", dirtyCages);
})
    .catch((error) => {
    console.log("OUCH! We caught an error:", error);
});
