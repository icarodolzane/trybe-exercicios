
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

/* 
* Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
todo Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
*/
const employeerInfo = {...user, ... jobInfos};

const {name: employeeName, age: age, nationality: nationality, profession: jobTittle, squadInitials: squad, squad:squadName} = employeerInfo;

console.log(`Hi, my name is ${employeeName}, I'm ${age} years old and I'm ${nationality}. I work as a ${jobTittle} and my squad is ${squad}-${squadName}.`);
