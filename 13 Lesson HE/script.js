"use strict"

Hamburger.SIZE_SMALL = {
   price: 120,
   callories: 375,
}

Hamburger.SIZE_MEDIUM = {
   price: 180,
   callories: 550,
}

Hamburger.SIZE_BIG = {
   price: 220,
   callories: 770,
}

Hamburger.TOPPING_CHEESE = {
   price: 15,
   callories: 45,
}

Hamburger.TOPPING_SALAT = {
   price: 10,
   callories: 5,
}

Hamburger.TOPPING_POTATO = {
   price: 15,
   callories: 30,
}

Hamburger.TOPPING_MUSHROOM = {
   price: 20,
   callories: 25,
}

Hamburger.TOPPING_MAZIK = {
   price: 22,
   callories: 20,
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG);

function Hamburger(hamburger) {
   this.price = hamburger.price;
   this.callories = hamburger.callories;
}

Hamburger.prototype.addTopping  = function (toping) {
   this.price += toping.price;
   this.callories += toping.callories;
}  

Hamburger.prototype.getPrice = function () {
   return this.price;
}

Hamburger.prototype.getCallories = function () {
   return this.callories;
}

hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAT);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_MUSHROOM);
hamburger.addTopping(Hamburger.TOPPING_MAZIK);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());