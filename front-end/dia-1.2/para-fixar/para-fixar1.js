import fetch from 'node-fetch';
/*
?Fazendo uma requisição usando o fetch
*Para fazer uma requisição usando o método fetch, precisamos passar a URL da API que queremos acessar. Para esse exemplo, vamos usar a o endereço https://api.goprogram.ai/inspiration, que deve nos retornar um objeto no formato:

{
  quote: "Alguma frase inspiradora",
  author: "Pessoa autora da frase"
}
*/

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));