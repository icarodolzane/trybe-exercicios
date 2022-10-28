/* 
  * Usando dois arrays diferentes para compor um array de objetos com pares: chave e valor;
*/

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts =(listProducts, listPrices) => listProducts.map((product, iterator)=>{
  return {[product]: listPrices[iterator]};
});

const newListProducts = listProducts(products, prices);

console.log(newListProducts);

