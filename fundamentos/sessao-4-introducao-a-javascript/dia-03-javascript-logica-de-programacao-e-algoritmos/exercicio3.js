/* 
Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css']; 

let maiorArray = array[0];
let menorArray = array[0];

for(let index = 0; index < array.length; index+=1){
   if(array[index].length > maiorArray.length){
    maiorArray = array[index]
   }
}

for(let index = 0; index < array.length; index+=1){
    if(array[index].length < menorArray.length){
     menorArray = array[index]
    }
 }

console.log(maiorArray);
console.log(menorArray);