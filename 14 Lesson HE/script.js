"use strict"

class Student {
   constructor(name, marks) {
       this.name = name;
       this.marks = marks;
       this.marks.avg = this.getAverageMark();
   }

   getAverageMark() {
       return this.getMarksSum() / this.marks.length;
   }

   getMarksSum() {
       return this.marks.reduce((a, b) => a + b);
   }
}

class Group {
   students = [];

   addStudent(student) {
       if (this.isStudent(student)) {
           this.students.push(student.marks.avg);
       }
   }

   isStudent(student) {
       return student instanceof Student;
   }

   getAverageMark() {
       return this.getAverageMarksSum() / this.students.length;
   }

   getAverageMarksSum() {
       return this.students.reduce((a, b) => a + b);
   }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));
group.addStudent({});

console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);