// Задание 1

function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0; 
  let avg;


  //console.log(max);
  for (let i of arr) {
    // console.log(i);
    if (Math.max(i) > max){
      max = i;
      // console.log(i)
    }
    if (Math.min(i) < min){
      min = i;
    }
    sum += i / arr.length;
    // console.log(sum);
   
    avg = sum.toFixed(2);
    
    console.log(avg);
    
     
  }
  
  // Ваш код

  return { min:min, max:max, avg:Number(avg) }; 
}


// console.log(getArrayParams([99, -99, 10]));
  


//  Задание 2
function worker(arr) {
  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
      
  }

 return sum;
}


function makeWork(arrOfArr, func) {
  
  let max = -Infinity;
  
  
  for (let n = 0; n < arrOfArr.length; n++) {
    
    func(arrOfArr[n]);
     if (func(arrOfArr[n]) > max) {
       max = func(arrOfArr[n]);
     }
    
  };

  
  return max
}
// console.log(makeWork([[1,2,3],[4,5,6]], worker));
// makeWork([[10,10,20],[20,19,10]],worker);
// // Задание 3
// function worker2(arr) {
//   // Ваш код
// }
