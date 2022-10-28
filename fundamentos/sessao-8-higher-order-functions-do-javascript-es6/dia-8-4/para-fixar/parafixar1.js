/* 
* Estrutura completa do REDUCE
! reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue )
 */

/* array.reduce((acc, curr) => {
  escopo de execução da função
}, valorInicial)
 */

/* 
*Exemplo de retorno do maior valor de um array usando o REDUCE:
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
 */

/* 
todo Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array: */

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (arr) => {
  return arr.reduce((acc, curr) => {
    if(curr %2 === 0){
      return acc + curr;
    }
    else {
      return acc;
    }
  });  
};
console.log('\nUsando apenas REDUCE:::');

console.log(sum(numbers));

/* 
 *Combinando FILTER + REDUCE:
 */

 console.log('\nCombinando FILTER + REDUCE:::');

 const getEvens = numbers.filter(number => number %2 === 0);

 
 console.log(getEvens.reduce((acc, number)=> acc + number));