const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
/* 
!Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
*/
const allLessons = () => {
    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} );
    return allLessons;
}

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        if(obj[array[index]].materia === 'Matemática'){
            total += obj[array[index]].numeroEstudantes;
        }
    }
    return total;
}

const allOfTheLessons = allLessons();

console.log(getNumberOfStudentsMath(allOfTheLessons));