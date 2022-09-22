/* Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

const pecaDeXadrez = "PeãO";

let rei = "rei";
let rainha = "rainha";
let bispo = "bispo";
let cavalo  = "cavalo";
let torre = "torre";
let peao = "peão";

switch (pecaDeXadrez.toLowerCase()){
    case rei:
        console.log("Rei: Se movimenta um bloco para todos as direções. ");
        break;
    case rainha:
        console.log("Rainha: Se movimenta em todas as direções em quantos blocos o jogador quiser.");
        break;
    case bispo:
        console.log("Bispo: Se movimenta somente nas diagonais em quantos blocos o jogador quiser.");
        break;
    case cavalo:
        console.log("Cavalo: Se movimenta 3 blocos a em qualquer direção (exceto diagonais) e um bloco a direta, fazendo um movimento de -L-.");
        break;
    case torre:
        console.log("Torre: Se movimenta somente na vertical em quantos blocos o jogador quiser.");
    case peao:
        console.log("Peão: Se movimenta apenas um bloco a frente ou para tomar (comer) outras peças nas diagonais. Na primeira jogada o jogador pode (opcionalmente)movimentar duas casas.");
        break;
    default:
        console.log("Peça informada não corresponde a uma peça de xadrez.");    

}