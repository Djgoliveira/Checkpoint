/*Repetir como um papagaio

Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”. */

for (let volta = 1; volta <=5; volta ++){
  console.log("Olá Mundo");
};

/* Contando números ímpares

Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: 
A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.*/

for (let numeros = 1;numeros <10; numeros++){   
    if (numeros % 2 == 0) {
        //console.log("Esses são pares",numeros);
    } else {
        console.log("Esses são ímpares: ",numeros);
    }       
};

/*
Criando a tabuada

Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
*/

let calculo =(multiplicador=1) =>{
       
    for ( let tabuada =1; tabuada<=10; tabuada++){
          let resultado = tabuada * multiplicador;
            console.log(multiplicador,"x", tabuada,"=", resultado);
    };   
}
calculo(5);

