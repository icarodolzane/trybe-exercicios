/* 
todo -  Crie uma função que receba um número e retorne seu fatorial.

!Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. 
!!!Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
 */

const factorial = (number) =>  {
    let result = 1;
    for (let index = 1; index <= number; index += 1) {
        result = result * index;            
    }
    return result;
}

const number = 4;

/* console.log(`O fatorial do número ${number} é ${factorial(4)}`); */

/* 
!!! - Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const factorialRecursive = (number) => (number <= 1) ? 1 : number * factorialRecursive(number-1); 

console.log(factorialRecursive(4));