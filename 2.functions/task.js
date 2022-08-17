// Задание 1
function getArrayParams (...arguments) {
  let min = arguments[0]; 
  let max = arguments[0];
  let sum = 0;
   for (let i = 0; i<arguments.length; i++) {if (arguments[i] > max) {max = arguments[i]} 
     if (arguments[i]<min) {min = arguments[i]}
     if (arguments.length>1) {sum += arguments[i]                      }
     };
  let result = sum/arguments.length;
  let avg = Number(result.toFixed(3));
  return {min,  max, avg}} 

// Задание 2

function worker(arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity; 
  for (let i=0; i<arrOfArr.length; i++) 
  {if (func(arrOfArr[i])>max) {max = func(arrOfArr[i]);
   }
    }
  return max;}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let diff = 0; 
  for (i=0; i<arr.length; i++) {if (arr[i]>max){max=arr[i]}
    if (arr[i]<min) {min = arr[i]}                          }
  diff = Math.abs(max-min);
  return diff;
}

