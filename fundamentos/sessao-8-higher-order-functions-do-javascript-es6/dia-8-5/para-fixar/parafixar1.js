/* 
todo Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
*/

// Faça uma lista com as suas frutas favoritas
const specialFruit = [
  "bananas",
  "avocados",
  "grapes",
  "strawberries",
  "apples",
];

// Faça uma lista de complementos que você gostaria de adicionar

const additionalItens = [
  "Farinha Láctea",
  "Leite Condensado",
  "Creme de Leite",
  "Chantily",
];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));
