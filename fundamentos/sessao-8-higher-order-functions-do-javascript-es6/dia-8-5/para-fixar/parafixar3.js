const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

/* saudacoes[1](saudacoes[0]); */

/* 
  todo Produza o mesmo resultado acima, porém utilizando array destructuring
 */
const [message, functionGreeting] = saudacoes;

functionGreeting(message);
