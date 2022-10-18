/* Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

todo Modifique a estrutura da função para que ela seja uma arrow function;
todo Modifique as variáveis para que respeitem o escopo onde estão declaradas;
todo Modifique as concatenações para template literals. */

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  } */

/*   testingScope(true); */

  /* 
  ! Mudando para ARROW 
  */

  const testingScopeArrow = (escopo) => {
    if (escopo === true) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
    /* console.log(ifScope + 'o que estou fazendo aqui? :O'); */
};

testingScopeArrow(true);

/* 
!Feito acima
*/

/* 
!Modificando para Template Literals
*/

const testingScopeArrowTemplateLiterals = (escopo) => {
    if (escopo === true) {
        const ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
        console.log(elseScope);
    }
}

testingScopeArrowTemplateLiterals(false);