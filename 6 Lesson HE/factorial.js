let r = 1;

function factorial(n) {
  if (n === 0) {
    return;
  }
  r = r * n;
  factorial(n - 1);
}

factorial(5);
console.log(r);
