function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age}
    
  Student.prototype.setSubject = function (subjectName) {
      this.subject = subjectName;
      console.log(subjectName)
    };
  
  Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
      this.marks = new Array();
      this.marks.push(mark)
    } 
    else {
      this.marks.push(mark)
           }
    console.log(this.marks)
  };

  Student.prototype.addMarks = function(...mark) {
    if (this.marks === undefined) {
      this.marks = new Array();
      this.marks.push(...mark)
    } else {this.marks.push(...mark)}
    console.log(this.marks)
  };
  
  Student.prototype.getAverage = function(arr) 
    {arr = this.marks; 
     let sum = 0;
     let result = 0;
     for (let i = 0; i<this.marks.length; i++) {
       sum += this.marks[i]; 
       result = sum/this.marks.length;
     }

return result;
    }

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason; 
    console.log(this.excluded)
  }
 