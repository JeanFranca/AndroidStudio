let valor //não inicializada
console.log(valor) //retorna undefined

valor = null; //significa que nao possui nenhum valor primitivo e nenhum endereço de memoria q possua um valor la
console.log(valor)
// console.log(valor.toString()); // erro
//quando for zerar o valor de uma variavel utilizar o null

const produto = {}
console.log(produto.preco); //undefined
console.log(produto);

produto.preco = 3.5;

console.log(produto);
produto.preco = undefined //evite atribuir undefined

console.log(!!produto.preco);
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);