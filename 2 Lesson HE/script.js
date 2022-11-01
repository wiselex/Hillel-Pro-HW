const operator = prompt ('Enter operator +, -, *, /'); const operA = prompt ('Enter operand A'); const operB = prompt('Enter operand B');
function calcul (){
   if (operator === '+') {
      alert(`${operA} + ${operB} = ${Number(operA) + Number(operB)}`)
   }else if (operator === '-') {
      alert(`${operA} - ${operB} = ${operA - operB}`)
   }else if (operator === '*') {
      alert(`${operA} * ${operB} = ${operA * operB}`)
   }else if (operator === '/') {
      alert(`${operA} / ${operB} = ${operA / operB}`)
   }else{
      alert('Wrong number')
   }
}
calcul();