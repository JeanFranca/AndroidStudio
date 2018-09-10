//Closure e o escopo criado quando uma função e declarada
//Ese escopo permite a funcao acessar e manipular variaveis externas a funcao


//contexto lexico em ação

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());