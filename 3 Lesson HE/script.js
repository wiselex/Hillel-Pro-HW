const operator = getOperator();
if(validate(operator) != false){
   const A = getOperand('A');
   if(!isNaN(A)){
      const B = getOperand('B');
      if(!isNaN(B)){
         let result = count(operator, A, B);
         showRes(operator, A, B, result);
      }else {
         show_error()
      }
   } else {
      show_error()
   }
} else {
   show_error()
}

function getOperator(){
   return prompt('Enter operator +, -, *, /');
}

function getOperand(operName){
   if (validate(operator) != false){
      return Number(prompt(`Enter operand ${operName}`));
   } 
}

function validate(operator){
   switch (operator){
      case '+': return '+';
      case '-': return '-';
      case '*': return '*';
      case '/': return '/';
      default: return false;
   }
}

function count(operator, a, b){
   return eval(a+operator+b)
}
function showRes(operator, A, B, result){
   return alert(`${A} ${operator} ${B} = ${result}`);
}
function show_error(){
   alert('Wrong value. Please, try again!');
}
