let a = 3;
global.b = 123
this.c = 345;
console.log(this.a);
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c)
console.log(module.exports === this);

//criando uma variavel sem var e let

abc = 3 // esta criando uma variavel global

console.log(global.abc);

//module.exports = {e: 456, f: false, g: 'teste'};