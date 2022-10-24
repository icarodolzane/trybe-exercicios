const wakingUp = () => 'Acordando!!!';
const breakfast = () => 'Bora tomar café!!!';
const gettingSleep = () => 'Partiu dormir!!!';
// Ao chamar a função doingThings:


const doingThings = (callback) => {
  const trigger = callback();
  console.log(trigger);;
};


doingThings(wakingUp);
doingThings(breakfast);
doingThings(gettingSleep);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!