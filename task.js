"use strict";

function solveEquation(a, b, c) {
  let rootOne;
  let rootTwo;
  let arr=[];
  let d = b**2-4*a*c;  
  if (d>0) {
   rootOne = -b+Math.sqrt(d)/(2*a); 
   rootTwo = -b-Math.sqrt(d)/(2*a);
    arr.push (rootOne, rootTwo);
  } else if (d===0) {
    rootOne = -b/(2*a); 
    arr.push (rootOne);
  }
  else if (d<0) {rootOne = null;
       rootTwo = null;
                }; 
  return arr;
} 
