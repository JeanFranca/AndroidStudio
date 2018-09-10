const escola = "COD3R"

console.log(escola.charAt(4));                     // exibe a letra que esta na posicao 4 do vetor de string escola
console.log(escola.charAt(5));                     // exibe a letra que esta na posicao 5 do vetor de string escola
console.log(escola.charCodeAt(3));                 // exibe o codigo ascii da letra que esta na posicao 3 do vetor da string escola
console.log(escola.indexOf('C'));                  // exibe qual a posicao da letra C no vetor da string
console.log(escola.substring(1));                  // exibe todas as letras a partir da posicao 1
console.log(escola.substring(0,3));                // exibe todas as letras que estao entre a posicao 0 e a posicao 3
console.log('Escola '.concat(escola).concat("!")); // Mescla varias strings
console.log(escola.replace(3, 'e'))                // substitui
console.log('Ana, Maria, Pedro'.split(','));       // quebra uma string e gera uma array