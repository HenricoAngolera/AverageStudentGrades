const students = [
  {
    name: "Joquinha",
    noteOne: 5,
    noteTwo: 10
  },
  {
    name: "Carlão",
    noteOne: 3,
    noteTwo: 1
  },
  {
    name: "Luana",
    noteOne: 8,
    noteTwo: 7
  },
]

function calculatingAvaregeStudent (firstNote, secondNote) {
  return (firstNote + secondNote) / 2
}

function printAvaregeStudent(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${calculatingAvaregeStudent(student.noteOne, student.noteTwo)}`
}

for(let student of students) {
  let print = printAvaregeStudent(student)
  let avarege = calculatingAvaregeStudent(student.noteOne, student.noteTwo)
  if (avarege >= 7){
    print += `
    Parabéns ${student.name}, você passou no concurso!`
    alert(print)
  } else {
    print += `
    \n Não foi dessa vez ${student.name}, tente novamente`
    alert(print)
  }
}