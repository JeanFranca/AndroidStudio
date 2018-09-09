const pilotos = ['Vettel', 'Alonso','Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//Adiciona um elemento no array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hanilton') //Adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa')

console.log(pilotos)

//remover

pilotos.splice(3, 1) //remove o 4 item

console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2 de pilotos

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)

console.log(algunsPilotos2);
