import fetch from 'node-fetch';
/* 
*Exercício de fixação
!Microblogs
*/

const fetchCall = () => fetch('https://dummyjson.com/users')
  .then(response => response.json());

const fillUsersSelect = () => fetchCall();

console.log(fillUsersSelect());