const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');

axios.get(url).then(response =>{
    const funcionarios = response.data;

    const eMulher = e => e.genero == 'F';
    const eChinesa = e => e.pais == 'China';
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual;
    }

    const resultado = f => f.filter(eMulher)
                            .filter(eChinesa)
                            .reduce(menorSalario);

    console.log(resultado(funcionarios));
})