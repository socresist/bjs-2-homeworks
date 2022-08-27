function parseCount (string) {
  let result=Number.parseInt(string);
  if (Number.isNaN(result)) {const parseError = new Error ("Невалидное значение"); throw parseError;} return result} 

  function validateCount(arg) {
  try {let result2 = parseCount(arg);
  if (!Number.isNaN(result2)) {console.log(result2)}} catch (error) {console.log("Вкралась ошибка")}
}; 

class Triangle {
  constructor (sideOne, sideTwo, sideThree) {this.sides = [sideOne, sideTwo, sideThree]}; 
  getPerimeter() {const sides = this.sides;
                 for (let i=0; i<3; i++)
                   {let perimeter = sides[0]+sides[1]+sides[2];
                   if (sides[0] > sides[1] + sides[2] || sides[1] > sides[0] + sides[2] || sides[2] > sides[0] + sides[1]) {const TriangleError = new Error ("Треугольник с такими сторонами не существует"); throw TriangleError};
                 return perimeter}}; 
                  
  getArea() {
    const sides = this.sides; 
    for (let i=0; i<3; i++) {let p = (sides[0]+sides[1]+sides[2]) / 2; let area = (p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])) ** 0.5; 
                             if (sides[0] > sides[1] + sides[2] || sides[1] > sides[0] + sides[2] || sides[2] > sides[0] + sides[1]) {const TriangleError = new Error ("Треугольник с такими сторонами не существует"); throw TriangleError};
                             return area.toFixed(3)};

      }
};         

function getTriangle(a, b, c) {
  try {
  let newTriangle = new Triangle(a, b, c); 
console.log(newTriangle.getPerimeter())
console.log(newTriangle.getArea())
} catch(error) {console.log("Ошибка! Треугольник не существует")}};