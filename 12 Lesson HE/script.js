"use strict"

function Calculator(base){
   if(typeof base !== 'number'){
      return false;
   }
   let defaultNumber = 100;
   this.base = base;
       this.add = function(add) {
           if(validateNum(add))
               this.base += add;
       },
       this.sub = function(sub) {
           if(validateNum(sub))
               this.base -= sub;
       },
       this.set = function(set) {
           if(validateNum(set))
               this.base = set;
       },
       this.reset = function () {
         this.base = defaultNumber;
       },
       this.get = function() {
           console.log(this.base);
       }
}

function validateNum(value) {
   if(typeof value === "number"){
      return value;
   }
}

const calculate = new Calculator(100);

calculate.add(500);
calculate.sub(300);
// calculate.set(8000);
// calculate.reset();

console.log(calculate.get());