/* 
 ! Exercício 3
todo Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
*/

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let totalOfLettersA = 0;
  names.forEach((name) =>{
    const lettersFromName = name.split('');
    totalOfLettersA += lettersFromName.reduce((lettersAinName, currentLetter)=> {
      if(currentLetter === 'a' || currentLetter === 'A'){
        return lettersAinName +1;
      }
      return lettersAinName;
    }, 0);
  });
  return totalOfLettersA;
}

console.log(containsA());