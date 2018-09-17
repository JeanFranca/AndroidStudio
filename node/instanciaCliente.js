const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instancianOVA')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor, contadorA.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);