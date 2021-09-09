'use strict'
function solveEquation(a, b, c) {
  let arr = []; 
  let D = Math.pow(b,2) - 4 * a * c;
  console.log(D);
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  }
  
  if (D == 0) {
    let X = -b / (2 * a);
    arr.push(X);
  }
 
  if (D < 0) {
    arr = [];
}
  return arr;

}

solveEquation(2, 333, 1)




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
