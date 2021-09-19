function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}
// let student1 = new Student("Никита", "Муж", "25");
// let student2 = new Student("Даша", "Жен", "25")


Student.prototype.setSubject = function (subjectName) {
 
  this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {
  
  if (this.marks === undefined) { 
     this.marks = [mark];
     
    } 
    else {
      this.marks.push(mark);
   }
}
Student.prototype.getAverage = function() {
  let avg = 0;
  
  this.marks.forEach((mark) => {avg += mark});
  return avg / this.marks.length;
  // for (let prop in this.marks) {
  //   console.log(prop);
  // }
}

Student.prototype.addMarks = function(...marks) {
  this.marks = marks;

}
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;

}

