const arr1 = [];
const arr2 = [];

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((el, idx) => el === arr2[idx]);

let NewArray = [];

function advancedFilter(NewArray) {
  let result = NewArray.filter((number) => number > 0).filter ((number) => number % 3==0).map ((number) => number * 10)
  return result;
};
