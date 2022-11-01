const operator = getOperator();
const operands = getOperands();
const opers = [];
const oper = getOper();
let result = count(operator, opers);
showRes(operator, opers, result);








function getOperator(){
   let operator
   do{
       operator = prompt('Enter operator +, -, *, /');
   } while((operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'))
   return operator;
}
function getOperands(){
   let operands;
   do{
      operands = prompt('Enter operands count (From 2 to 4)');
      } while(operands !== '2' && operands !== '3' && operands !== '4');
      return operands;
   }
function getOper(){
   for (i = 1; i <= operands; i++){
      do{
         str = prompt(`Enter ${i}-th operand`);
      } while(!Number(str));
      opers.push(str);
   }
}
function count(operator, opers){
   switch (operator){
      case '+': return '+';
      case '-': return '-';
      case '*': return '*';
      case '/': return '/';
      default: return false;
   }
}
function count(operator, opers){
   return eval(`${opers.join(` ${operator} `)}`)
}
function showRes(operator, opers, result){
   return alert(`${opers.join(` ${operator} `)} = ${result}`);
}