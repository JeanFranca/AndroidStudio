var a = 3; // var pode redeclarar uma variavel
let b = 4; // let nao pode redeclarar uma variavel
const c = 5 // const nao pode redefinir o valor 

/*
    crie variaveis com a palavra reservada 'let' sempre evite criar com var
    quanto mais constante no codigo melhor caso precise mesmo alterar o valor de uma variavel usar let
*/

var a = 30;
b = 40;

console.log(a, b);

a = 300;
b = 400

console.log(a, b);
