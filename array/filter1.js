const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49 , fragil: true},
    { nome: 'Copo de plastico', preco: 18.49 , fragil: false}
]

const eFragil = p => p.fragil;
const eCaro = p => p.preco >= 500;

const resultado = p => p.filter(eFragil).filter(eCaro)

console.log(resultado(produtos))