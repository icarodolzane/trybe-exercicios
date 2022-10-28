/*
 * 🚀Organizando biblioteca
 * Para os exercícios propostos, use o seguinte template:
 */
const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* 
todo Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
!De olho na dica 👀: Use a função map
*/
function formatedBookNames() {
  // escreva seu código aqui
  const bookFormated = books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name} `;
  });
  return bookFormated;
}

/* console.log(formatedBookNames()); */

/* 
todo Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
 *De olho na dica 👀: use as funções map, sort
*/

function nameAndAge() {
  // escreva seu código aqui
  const authorAgeWhenBookReleased = (birthDate, booksRelease) =>
    `${booksRelease - birthDate} anos de idade quando lançou o livro.`;
  const arrayNameAndAge = books
    .sort((a, b) => (a.author.birthYear > b.author.birthYear ? 1 : -1))
    .map((book) => {
      return `{ age:${authorAgeWhenBookReleased(
        book.author.birthYear,
        book.releaseYear
      )}, nameAuthor: ${book.author.name},}`;
    });

  return arrayNameAndAge;
}

/* console.log(nameAndAge()); */

/* 
todo Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 !De olho na dica 👀: use a função filter;
*/
function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const booksArray = books.filter((book) => {
    return book.genre === "Ficção Científica" || book.genre === "Fantasia";
  });
  return booksArray;
}

/* console.log(fantasyOrScienceFiction()); */

/* 
todo Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
* De olho na dica 👀: use as funções filter e sort.
*/

const oldBooksOrdered = () =>
  books
    .filter((book) => book.releaseYear <= 1962)
    .sort((a, b) => (a.releaseYear > b.releaseYear ? 1 : -1));
// escreva seu código aqui

/* console.log(oldBooksOrdered()); */

/* 
todo Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
*/
const fantasyOrScienceFictionAuthors = () =>
  // escreva seu código aqui
  books
    .filter(
      (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
    )
    .sort((a, b) => (a.author.name > b.author.name ? 1 : -1))
    .map((book) => book.author.name);

/* console.log(fantasyOrScienceFictionAuthors()); */

/* 
todo Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
*/

const oldBooks = () => books
.filter((book) => book.releaseYear <= 1962)
.map(book => book.name);

/* console.log(oldBooks()); */

/* 
todo Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
! De olho na dica 👀: cada inicial termina com um ponto.
*/

/* 
*[0] - 'J'
![1] - '.'
?[2] - ' '
*[3] - 'R'
![4] - '.'
?[5] - ' '
*[6] - 'R'
![7] - '.' 
*/

const authorWith3DotsOnName = () =>
  books.find((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  )).name;


console.log(authorWith3DotsOnName());