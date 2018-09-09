const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: todos os alunos sao bolsistas?

// const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
//     if(!acumulador){
//         return false
        
//     }else{
//         return true
//     }
// })

// console.log(resultado)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio 2: Algum aluno é bolsista?

// const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
//     if(!atual){
        
//     }else{
//         return true
        
//     }
// })

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
