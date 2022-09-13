function parseCount (string) {
  
  let result = Number.parseInt(string);
  
  if (Number.isNaN(result)) {
    const parseError = new Error ("Невалидное значение"); 
    throw parseError;
  } 
  
  return result
} 
 

function validateCount(arg) {

  try {
    return parseCount(arg);

    if (!Number.isNaN(arg)) {
      console.log(arg)
    }
  } 
  
  catch (error) {
    return "Вкралась ошибка"
    }
  }; 


class Triangle {
  
  constructor (sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
     
    if (sideThree > sideOne + sideTwo || sideOne > sideThree + sideTwo || sideTwo > sideOne + sideThree) {
      const TriangleError = new Error ("Треугольник с такими сторонами не существует"); 
      throw TriangleError};
      this.perimeter = this.sideOne+this.sideTwo+this.sideThree
    }; 
  
  getPerimeter() {
    return this.perimeter
  }; 
                  
  getArea() {
    const p = this.perimeter / 2;
    const area = (p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)) ** 0.5;
    return Number(area.toFixed(3))
  };
};  

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
}

  catch(error) {
    const catchError = function() {
      return "Ошибка! Треугольник не существует";
    }

    return {
      getArea: catchError(),
      getPerimeter: catchError(),          }
  }
};

