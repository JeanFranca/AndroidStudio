const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar array com apenas os precos

const separa = e => JSON.parse(e);
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(separa).map(apenasPreco)
console.log(resultado)