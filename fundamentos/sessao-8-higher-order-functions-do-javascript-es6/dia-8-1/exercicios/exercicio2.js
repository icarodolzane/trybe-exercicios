/* 
todo Sorteador de loteria
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */

const checkWinner = (luckyOne, betNumber ) => luckyOne === betNumber;

const getLuckNumbers = (betNumber, callback) => {
  const luckyNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1 );
  return (callback(betNumber, luckyNumber))? `Parabéns você ganhou! O número sorteado foi: ${luckyNumber}` : `Tente novamente!!! O número sorteado foi: ${luckyNumber}`;
};


console.log(getLuckNumbers(2,checkWinner));

/* console.log(getLuckNumbers(2, checkWinner)); */