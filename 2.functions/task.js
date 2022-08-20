// Задание 1
function getArrayParams(arr) {
  let min = arr[0]; 
  let max = arr[0];
  let sum = 0;
   for (let i = 0; i<arr.length; i++) {if (arr[i] > max) {max = arr[i]};
     if (arr[i]<min) {min = arr[i]};
    sum += arr[i]
     };
  let result = sum/arr.length;
  let avg = Number(result.toFixed(2));
  return {min,  max, avg}};  

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

