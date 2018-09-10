// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro';
console.log(pessoa);

//pessoa 
//pessoa = {nome:'Ana'}

Object.freeze(pessoa);

pessoa.nome = 'Maria';

console.log(pessoa.nome)

const pessoaConstante =Object.freeze({ nome: 'João'});
console.log(pessoaConstante)
