const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

/* 
  !Exemplo de default destructuring
*/

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian


console.log('\n');
console.log('\n');
console.log('\n');

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
