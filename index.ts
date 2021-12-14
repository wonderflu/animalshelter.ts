import IAnimal from "./interface/ianimal";
import ICage from "./interface/icage";
import IShelter from "./interface/ishelter";
import Cat from "./implementation/cat.js";
import Cage from "./implementation/cage.js";
import Shelter from "./implementation/shelter.js";
import Owner from "./implementation/owner.js";

const tetris: IAnimal = new Cat("catI", 2010, "homeless", 4);
const mint: IAnimal = new Cat("catII", 2021, "british", 4);
const murlo: IAnimal = new Cat("catIII", 2013, "homeless", 4);
const murzika: IAnimal = new Cat("catIV", 2010, "british", 4);
const murita: IAnimal = new Cat("catV", 2016, "homeless", 4);
const muridze: IAnimal = new Cat("catVI", 2018, "siberian", 4);
const tusita: IAnimal = new Cat("catVII", 2017, "shorthair", 4);
const tobika: IAnimal = new Cat("catVIII", 2015, "homeless", 4);
const kolita: IAnimal = new Cat("catIX", 2020, "british", 4);



const cague: ICage = new Cage("cageI");
const cague2: ICage = new Cage("cageII", [mint]);
const cague3: ICage = new Cage("cageIII", [murlo, murzika, murita]);
const cague4: ICage = new Cage("cageIV", [muridze, tusita]);
const cague5: ICage = new Cage("cageV");

const natahinDom: IShelter = new Shelter("NatahinDom", [cague, cague2, cague3, cague4]);

const nataha: Owner = new Owner("Nataha", 1993, natahinDom);


console.log(natahinDom.cages);
console.log(natahinDom.findCageByID(cague3.id))
// console.log(natahinDom.deleteCageByID(cague.id))
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

// natahinDom.dirtyCagesCBAsync((error: Error, dirtyCages: ICage[]): void => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(dirtyCages);
    
//     natahinDom.dirtyCagesCBAsync((error: Error, dirtyCages: ICage[]): void => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(dirtyCages);
//     cague2.clean();
//     cague4.clean();
//     cague5.clean();
//         natahinDom.dirtyCagesCBAsync((error: Error, dirtyCages: ICage[]): void => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(dirtyCages);
//           }
//         });
//       }
//     });
//   }
// });


natahinDom
  .dirtyCagesAsync()
  .then((dirtyCages) => {
    console.log(
      "1st promise has been resolved. We got some filthy cages for you:",
      dirtyCages
    );
    return natahinDom.dirtyCagesAsync();
  })
  .then((dirtyCages) => {
    console.log(
      "2nd promise has been resolved. We got some filthy cages for you:",
      dirtyCages
    );
    // cagu.clean();
    // cagu2.clean();
    // cagu4.clean();
    return natahinDom.dirtyCagesAsync();
  })
  .then((dirtyCages) => {
    console.log(
      "3rd promise has been resolved. We got some filthy cages for you:",
      dirtyCages
    );
  })
  .catch((error) => {
    console.log("OUCH! We caught an error:", error);
  })


// async function findDirtyCages(): Promise<void> {
//   try {
//     const dirtyCages: ICage[] = await natahinDom.dirtyCagesAsync();
//     console.log("1st promise has been resolved.", dirtyCages);
//     const dirtyCages2: ICage[] = await natahinDom.dirtyCagesAsync();
//     console.log("2nd promise has been resolved.", dirtyCages2);
//     cague2.clean();
//     cague4.clean();
//     cague5.clean();
//     const dirtyCages3: ICage[] = await natahinDom.dirtyCagesAsync();
//     console.log("3rd promise has been resolved.:", dirtyCages3);
//   } catch (error) {
//     console.log("OUCH! We caught an error:", error);
//   }
// }
// findDirtyCages();



