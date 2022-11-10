
//1. Crie uma função que converta polegadas em centímetros.
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

const polegadasEmCm = (polegadas) =>{
    return polegadas * 2.54;
}
console.log(polegadasEmCm(31));

/*
2. Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
*/

const converteStringEmUrl =(texto)=>{
return `www.${texto}.com.br`;
}
console.log(converteStringEmUrl("google"));

/*
3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o
caracter de exclamação ( ! ).
*/

const converterString = (texto) =>{
    return (texto+" !!");
}
console.log(converterString("douglas"));

/*
4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano
humano, equivale a 7 anos para eles.
*/

const idadeCachorro = (idadeHumano=0)=>{
       let idadecahorro = idadeHumano * 7;
       return (`Seu Cachorro tem: ${idadecahorro} anos`);
}
console.log(idadeCachorro(3));

/*
5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como
parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.
*/

const horaTrabalhada = (hora=0)=>{
    let horaMes = hora * 30;
    let horaDia = parseInt(hora / 30);
       return (`Se você trabalha ${hora} horas no Mês, você recebe ${horaMes} reias e trabalha ${horaDia} horas por dia.`);
       
}
console.log(horaTrabalhada(80));

/*
6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em
centímetros e o peso em quilogramas. Em seguida, execute a função, testando
diferentes valores.
*/
 const imc = (peso=0, altura=0)=>{
    let resultadoImc = (peso/(altura*altura));
     if (resultadoImc <= 18.5){
        return (`Você está com ${parseFloat(resultadoImc).toFixed(2)} de IMC está Menos do que 18,5 isso significa que está com Baixo Peso `);
    } else if (resultadoImc > 18.5 && resultadoImc <24.9 ){
        return (`Você está com ${parseFloat(resultadoImc).toFixed(2)} de IMC está entre 18,5 e 24,9 isso significa que está com Peso Normal `);
    }else if (resultadoImc > 25 && resultadoImc <29.9 ){
        return (`Você está com ${parseFloat(resultadoImc).toFixed(2)} de IMC está entre 25 e 29,9 isso significa que está com Excesso de Peso `);
    }else if (resultadoImc > 30 && resultadoImc <34.9 ){
        return (`Você está com ${parseFloat(resultadoImc).toFixed(2)} de IMC está entre 30 e 34,9 isso significa que está com Obesidade `);
    }else if(resultadoImc > 35)
        return (`Você está com ${parseFloat(resultadoImc).toFixed(2)} de IMC está acima de 35 isso significa que está com Obesidade Extrema `);
 }
console.log(imc(93,1.60));
