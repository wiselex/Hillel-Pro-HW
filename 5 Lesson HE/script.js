const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

const averageStudent = averageStudentMark(11); 
const groupMark = averageGroupMark(students);

console.log(averageStudent);
console.log(groupMark);

function averageStudentMark(id){
   let idStudent = students.find(value => value.id === id);
   let lenghtMarks = idStudent.marks.length;
   return idStudent.marks.reduce((a, b) => a + b) / lenghtMarks;
}

function averageGroupMark(students){
   let masMarks = [];
   let allStudents = students.length;
   for(let i = 0; i < allStudents; i++){
      let avarage = students[i].marks;
      let studentsMarks = avarage.length;
      for(let a = 0; a < studentsMarks; a++){
         let avarageMarks = avarage[a];
         masMarks.push(avarageMarks);
      }
   }
   masMarks = masMarks.reduce((a, b) => a + b) / masMarks.length;
   return masMarks;
}
