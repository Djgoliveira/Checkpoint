/**
 *Vamos fazer uma Calculadora
Com os conhecimentos que adquirimos até agora, podemos desenvolver a nossa
primeira aplicação, uma calculadora! Essa aplicação consiste em diferentes níveis de
dificuldade, e estaremos juntos para você poder conclui-la!

Crie uma função adicionar, que deverá receber dois parâmetros e retornar a
soma deles.
 */
const somar = (valor1, valor2)=>{
    return valor1 + valor2;
}

//Crie uma função de subtração, que deverá receber dois parâmetros e retornar
//a subtração do primeiro menos o segundo.

const subtrair = (valor1, valor2)=>{
    return valor1 - valor2;
}

//Crie uma função de multiplicação, que deverá receber dois parâmetros e
//retornar o resultado de sua multiplicação.

const multiplicacao = (valor1, valor2)=>{
    return valor1 * valor2;
}

//Crie uma função de divisão, que receberá dois parâmetros e retornará o
//resultado da divisão do primeiro sobre o segundo.

const divisao = (valor1, valor2) =>{
    return valor1 / valor2;
}

const quadradoDeNumero =(valor1)=>{
    return valor1**valor1;
}

const mediaDeTresNumeros = (valor1, valor2, valor3) => {
    return somar(valor1, valor2 + valor3)/3;
}

const geradorDePorcentagem = (valor1, valor2)=> {
    return (valor1*100)/valor2;
}


console.log ("-------------- Teste de Operações / Calculadora --------------");
let valor1=2; //aqui você colocar os valores
let valor2=200; //aqui você colocar os valores
let valor3=50; //aqui você colocar os valores

let resultadoSoma = somar(valor1,valor2); 
console.log(`O resultado de ${valor1} + ${valor2} = ${resultadoSoma} `);
let resultadoSubtracao = subtrair(valor1,valor2);  
console.log(`O resultado de ${valor1} - ${valor2} = ${resultadoSubtracao} `);
let resultadoMultiplicacao = multiplicacao(valor1,valor2);  
console.log(`O resultado de ${valor1} * ${valor2} = ${resultadoMultiplicacao} `);
let resultadoDivisao = divisao(valor1,valor2);  
console.log(`O resultado de ${valor1} / ${valor2} = ${resultadoDivisao} `);
let resultadoQuadradoDeNumero = quadradoDeNumero(valor1);
console.log(`O resultado de ${valor1} elevado a ${valor1} = ${resultadoQuadradoDeNumero} `);
let resultadomediaDeTresNumeros = mediaDeTresNumeros(valor1, valor2, valor3);
console.log(`O resultado da Média entre ${valor1}, ${valor2} e ${valor3} = ${resultadomediaDeTresNumeros} `);
let resultadoPorcentagem = geradorDePorcentagem(valor1, valor2);
console.log(`O número ${valor1} é ${resultadoPorcentagem}% = ${valor2} `);
