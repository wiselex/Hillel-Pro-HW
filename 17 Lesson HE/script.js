"use strict"

const URL = 'https://63680d18edc85dbc84e1209b.mockapi.io/api/hillel/api_hw-17';

const formEl = document.querySelector('.form');
const ulEl = document.querySelector('.ul-list');
const inpEl = document.querySelector('.inp');
const btnEl = document.querySelector('.buttn');
const liEl = document.querySelectorAll('.list');

formEl.addEventListener('submit', onFormElSubmit);
ulEl.addEventListener('click', deleteEl);

getToDoList();

function getToDoList() {
   fetch(URL)
   .then(res => res.json())
   .then(renderToDoList)
   .catch(err => {
      alert("Can't create new element");
      console.log(err);
   })
}

function createToDo(todo) {
   fetch(URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
         'content-type': 'application/json'
      }
   })
   .then(res => res.json())
   .then(renderTemplate)
   .catch(err => {
      alert("Can't create new element");
      console.log(err);
   })
}

function renderToDoList(todo) {
   todo.forEach(todo => renderTemplate(todo));
}


function getToDo() {
   return {
      title: inpEl.value,
      done: false,
   }
}

function onFormElSubmit(e) {
   e.preventDefault();
   const todo = getToDo();
   if(inpEl.value.trim() === ''){
      return;
   }
   createToDo(todo);
   inpEl.value = '';
}

function deleteToDO(todoDel) {
   fetch(URL+`/${todoDel}`, {
      method: 'DELETE',
      headers: {
         'content-type': 'application/json'
      }
   })
   .then(res => res.json)
   .catch(err => {
      alert("Can't delete new element");
      console.log(err);
   })
}

function renderTemplate(todo) {
   let clearTemplate = getToDoTemplate(todo);
   ulEl.insertAdjacentHTML('beforeend', clearTemplate);
}

function deleteEl(e) {
   if (e.target.classList.contains('dele')) {
      const getDeleteEl = findDelEl(e.target);
      const getId = getDeleteEl.dataset.id;
      e.target.closest('.list').remove();
      deleteToDO(getId);
   }
   addClassColor(e);
}

function findDelEl(el) {
   return el.closest('.list');
}

function addClassColor(e) {
   if(e.target.classList.contains('list')){
      e.target.closest('.list').classList.toggle('bcg-gr');
   }
}

function getToDoTemplate(todo) {
   return `
      <li data-id="${todo.id}" class="list">
         ${todo.title}
         <button class="dele">Delete</button>
      </li>
   `
}