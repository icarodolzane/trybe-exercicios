const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

/* 
todo Utilize o reduce para transformar uma matriz em um array.
*/

const flatten = () => arrays.reduce((acm, curr)=> acm.concat(curr, ),[]);  

console.log(flatten());