const ulEl = document.querySelector('.ul-list');
const inpEl = document.querySelector('.inp');
const btnEl = document.querySelector('.buttn');
const liEl = document.querySelectorAll('.list');
const itemTemplate = document.querySelector('#itemTemplate').innerHTML;
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormElSubmit);
ulEl.addEventListener('click', deleteEl);


function onFormElSubmit(e) {
   e.preventDefault();
    if(inpEl.value.trim() === ''){
      return;
   }
    let clearTemplate = itemTemplate;
    clearTemplate = clearTemplate.replace('[name]', inpEl.value);
    ulEl.insertAdjacentHTML('beforeend', clearTemplate);
    inpEl.value = '';
}

function deleteEl(e) {
    if (e.target.classList.contains('dele')) {
      e.target.closest('.list').remove();
    }
    addClassColor(e);
}

function addClassColor(e) {
   if(e.target.classList.contains('list')){
      e.target.closest('.list').classList.toggle('bcg-gr');
   }
}