/* 
* 🚀 Organizando uma biblioteca

*/

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* 
todo Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.De olho na dica 👀: use a função find.
*/

function authorBornIn1947() {
  const authorName = books.find(book => book.author.birthYear === 1947).author.name;
  return authorName; 
}

/* 
todo Retorne o nome do livro de menor nome.
!De olho na dica 👀: use a função forEach.
*/

function smallerName() {
  let nameBook;
  let bookLength;
  // escreva aqui o seu código
  books.forEach(book =>{
    if(!nameBook){
      bookLength = book.name.length;
      nameBook = book.name;
    } else if(book.name.length > nameBook){
      bookLength = book.name.length;
      nameBook = book.name;
    } 
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

/* console.log(smallerName()); */

/* 
todo Encontre o primeiro livro cujo nome possui 26 caracteres.
*/

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
        name: 'George R. R. Martin',
    birthYear: 1948,
  },
    releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  let namedBook;
  let bookLength;
  // escreva aqui o seu código
  books.forEach(book =>{
    if(!namedBook){
      bookLength = book.name.length;
      namedBook = book;
    } else if(book.name.length > namedBook){
      bookLength = book.name.length;
      namedBook = book;
    } 
  });

  // Variável nameBook que receberá o valor do menor nome;
  return namedBook;
}

/* console.log(getNamedBook()); */

/* 
todo Ordene os livros por data de lançamento em ordem decrescente.
*/

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  const booksOrdered = books.sort((a,b) => a.releaseYear > b.releaseYear ? 1 : -1);
  return booksOrdered;
}

/* console.log(booksOrderedByReleaseYearDesc()); */

/* 
!Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. 
*/

const checkIfIsXXCentury = (date) => date >= 1901 && date <= 2000;

function everyoneWasBornOnSecXX(){
  return books.every(book => checkIfIsXXCentury(book.author.birthYear));
}
console.log(everyoneWasBornOnSecXX());

