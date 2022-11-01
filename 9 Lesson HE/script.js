"use strict"

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const listEl = document.querySelector(".ul-list");
const childEl = document.querySelector(".child")

btnEl.addEventListener("click", onButtonClick);

function onButtonClick() {
    if (inputEl.value.length == 0){
        return false
    } else{
        let par = childEl.cloneNode(true);
        par.innerHTML = inputEl.value;
        listEl.appendChild(par);
        inputEl.value = "";
    }
}

