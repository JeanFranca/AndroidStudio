Array.prototype.filter2 = function (callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49 , fragil: true},
    { nome: 'Copo de plastico', preco: 18.49 , fragil: false}
]

const eFragil = p => p.fragil;
const eCaro = p => p.preco >= 500;

const resultado = p => p.filter2(eFragil).filter2(eCaro)

console.log(resultado(produtos))