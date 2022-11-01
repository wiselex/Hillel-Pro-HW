"use strict";

const quizForm = [
   {
      question: "Сколько хромосом у здорового человека?",
      answer: "46",
      type: "prompt",
   },
   {
      question: "Путин - хуйло?",
      answer: true,
      type: "confirm", 
   },
   {
      question: "Сколько хромосом у Путина?",
      answer: "47",
      type: "prompt",
   },
   {
      question: "Сколько тупых овец в московии (в млн)?",
      answer: "144",
      type: "prompt",
   },
   {
      question: "Снести ли памятник Екатерине-2 в Одессе?",
      answer: true,
      type: "confirm",
   },
   {
      question: "Сколько черных пакетов выделяются на одного орка?",
      answer: "1",
      type: "prompt",
   },
   {
      question: "На сколько вы оцениваете работу ЗСУ от 1 до 10?",
      answer: "10",
      type: "prompt",
   },
   {
      question: "Со скольких позиций готовилось нападение на Беларусь?",
      answer: "4",
      type: "prompt",
   },
   {
      question: "Нужно ли сжигать российский флаг?",
      answer: true,
      type: "confirm",
   },
   {
      question: "Поддерживаете ли вы уход иностранных компаний из московии?",
      answer: true,
      type: "confirm",
   },
   {
      question: "Считаете ли вы Россию своим домом?",
      answer: false,
      type: "confirm",
   }
]

let mark = 0;

sortArr(quizForm);
showRes(mark);

function sortArr(quiz) {
   for(let u = 0; u < quiz.length; u++){
      if(compare(quiz[u])){
         mark = 10 + mark;
      }
   }
}

function compare(form) {
   let types;
   if(form.type === "prompt"){
      types = prompt;
   }
   if(form.type === "confirm"){
      types = confirm;
   }
   return (types(form.question) == form.answer);
}

function showRes(point) {
   alert(`Вы получили ${point} баллов!`);
}