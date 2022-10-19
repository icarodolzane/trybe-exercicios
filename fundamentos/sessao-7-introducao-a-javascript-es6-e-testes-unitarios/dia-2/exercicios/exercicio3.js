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
  !Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  */

  const addValueInObject = (obj, key, value ) =>{
    const addValue = obj[key] = value;
  }
  console.log(" Exercício 1 -------------------------");
  console.log(lesson2);

  /* 
  !after calling addValueInObject
  */

  addValueInObject(lesson2, 'turno', 'noite');

  console.log(" Exercício 2 -------------------------");
  console.log(lesson2);

/* 
!Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const showObjectKeys = (obj) => {
    const keysOfTheObject = Object.keys(obj);
    return keysOfTheObject;
}

/* 
  !after calling showObjectKeys
  */
  console.log(" Exercício 3 -------------------------");
  console.log(showObjectKeys(lesson2));

const countObjectLenght = (obj) =>{
    const objArray = Object.entries(obj);
    let objLenght = 0;
    for (let index = 0; index < objArray.length; index += 1) {
        objLenght = objLenght + objArray[index].length;
    }
    return objLenght;
}

console.log(" Exercício 4 -------------------------");
console.log(`O tamanho do objeto (keys + values) é ${countObjectLenght(lesson2)}`);

/* 
!Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 
*/

const showObjectValues = (obj) =>{
    const values = Object.values(obj);
    return values;    
}

console.log(" Exercício 5 -------------------------");
console.log(showObjectValues(lesson2));


/* 
!Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
*/

const allLessons = () => {
    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} );
    return allLessons;
}

console.log(" Exercício 6 -------------------------");
console.log(allLessons());

const totalOfStudents = () => {
    const lessons = allLessons();
    let students = lessons.lesson1.numeroEstudantes;
    students = students + lessons.lesson2.numeroEstudantes;
    students = students + lessons.lesson3.numeroEstudantes;

    return students;
}

console.log(" Exercício 7 -------------------------");
console.log(`${totalOfStudents()} students`);

/* 
!-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
!console.log(getValueByNumber(lesson1, 0));
!Output: 'Matemática'
*/

const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(" Exercício 8 -------------------------");
console.log(getValueByNumber(lesson2,3));

/* 
!Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (const index in arr) {
    if(arr[index][0] === key && arr[index][1] === value) isEqual = true
  }return isEqual;
}

console.log(" Exercício 9 -------------------------");
console.log(verifyPair(lesson2,'professor', 'Icaro'));


