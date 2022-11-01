"use strict"

const inputEl = document.querySelectorAll('.inp');
const btnEl = document.querySelector('.btn');
const table = document.querySelector('.table');
const itemTemplate = document.querySelector('#itemTemplate').innerHTML;


btnEl.addEventListener('click', onBtnClick)

function onBtnClick() {
   let inpName = itemTemplate;
    if(validate() == false)
      return;
   for(let a = 0; a < inputEl.length; a++){
      inpName = inpName.replace('['+ inputEl[a].getAttribute("name")+']', inputEl[a].value);
   }
   table.insertAdjacentHTML('beforeend', inpName)
   inputEl.forEach((el) => {el.value = ''})
   updateDel()
}

function validate(){
    for(let i = 0; i < inputEl.length; i++){
        if(inputEl[i].value.trim() == ''){
            alert('Please enter your ' + inputEl[i].getAttribute("name"));
            inputEl[i].classList.add('errInp');
            return false;
        }
        if(inputEl[i].getAttribute("name") == 'phone' && (inputEl[i].value.length > 13 || inputEl[i].value.length < 9)){
            alert('Please enter valid ' + inputEl[i].getAttribute("name"));
            inputEl[i].classList.add('errInp');
            return false;
        }
        inputEl[i].classList.remove('errInp');
    }
}

function updateDel(){
    document.querySelectorAll('.del').forEach((el) => {
        el.addEventListener('click', delAct);
    })
}


function delAct(item){
    (item.target).closest('tr').remove();
}