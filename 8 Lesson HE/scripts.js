"use strict";

function calcul(baseVal) {
let defaultNumbr = 100;
   return {
      add: (add) => {
         if (typeof add === "number") {
            baseVal = add + baseVal;
         } else {
            baseVal;
         }
      },
      sub: (sub) => {
         if (typeof sub === "number") {
            baseVal = baseVal - sub;
         } else {
            baseVal;
         }
      },
      set: (set) => {
         if (typeof set === "number") {
            baseVal = set;
         } else {
            baseVal;
         }
      },
      reset: () => {
         baseVal = defaultNumbr;
      },
      get: () => {
         return baseVal;
      },
   };
}

const calculator = calcul(100);

calculator.add(500);
calculator.sub(1000);
calculator.set(2000);
calculator.reset();

console.log(calculator.get());
