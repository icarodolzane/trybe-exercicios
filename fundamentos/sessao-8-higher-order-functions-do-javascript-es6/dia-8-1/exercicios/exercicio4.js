/* 
todo Exercícios - Bônus - Game Actions Simulator 
*/
/* 

!
Parte I
*Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. Para os próximos exercícios copie o código abaixo.
 */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 
!Crie uma função que retorna o dano do dragão.
*O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*Crie uma função que retorna o dano causado pelo warrior.
*O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/

const dragonAttack = (dragon) => {
  const max = dragon.strength;
  const min = 15;
  const damage = Math.floor(Math.random() * (max - min)+min);
  return damage;
};

const warriorAttack = (warrior) => {
  const max = (warrior.strength * warrior.weaponDmg);
  const min = warrior.strength;
  const damage = Math.floor(Math.random() * (max - min)+min);
  return damage;
};

/* 
*Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
*O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * * (dano máximo).
*A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0. */

const checkMageMana = () => /* (mage.mana < 15) ? true : false; */{
  if(mage.mana > 15) return true;
  else return false;
} 

const mageAttack = (mage, callback) => {
  const max = mage.intelligence * 2;
  const min = mage.intelligence;
  const damage = Math.floor(Math.random() * (max - min)+min);
  let value;
  if(callback){
    value = mage.mana - 15;
  }else{
    value = `Não possui mana suficiente! Mana: ${mage.mana} `;
  }
   
  return {
    dmg: `${damage}`,
    manaSpent:`${value}`,  
  };
};

/* console.log(mageStatus(mage, checkMageMana())); */
/* console.log(checkMageMana()); */

/* 
todo Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por definição uma HOF, pois, neste caso, são funções que recebem como parâmetro outra função.
Copie o código abaixo e inicie sua implementação:
*/

/*
todo Crie a primeira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

 */

const gameActions = {
  /*  
  todo Crie as HOFs neste objeto. */
  warriorTurn : (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warrior.damage;
  },
  mageTurn : (mageAttack) => {
    const mageTurnsStats = mageAttack(mage);
    const mageDamage = mageTurnsStats.dmg;
    mage.damage = mageDamage;
    mage.mana -= mageTurnsStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn : (dragon) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());