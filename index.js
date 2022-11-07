/* 
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function tempMicronOndas (botao,temp=0){
    let botao = [0.10,0.8,0.15,0.12,0.8]
        
    if (temp == botao[0]  ){
        console.log('Prato pronto, bom apetite !!!');
    } else if (temp >= 2* botao[0] && temp < 3* botao[0]){
        console.log('A comida queimou !!!'); 
    }else if (temp > 3* botao[0]){
            console.log('Kabumm !!!');          
    }else if (temp < botao[0]) {
        console.log('tempo insuficiente !!!');
    }    
    else if (temp == botao[1]  ){
        console.log('Prato pronto, bom apetite !!!');
    } else if (temp >= 2* botao[1]  && temp < 3* botao[1] ){
        console.log('A comida queimou !!!'); 
    }else if (temp > 3* botao[1] ){
            console.log('Kabumm !!!');          
    }else if (temp < botao[1] ) {
        console.log('tempo insuficiente !!!');
    }

    else if (temp == botao[2]   ){
        console.log('Prato pronto, bom apetite !!!');
    } else if (temp >= 2* botao[2]  && temp < 3* botao[2] ){
        console.log('A comida queimou !!!'); 
    }else if (temp > 3* botao[2] ){
            console.log('Kabumm !!!');          
    }else if (temp < botao[2] ) {
        console.log('tempo insuficiente !!!');
    } 
    
    else if (temp == botao[3]   ){
        console.log('Prato pronto, bom apetite !!!');
    } else if (temp >= 2* botao[3]  && temp < 3* botao[3] ){
        console.log('A comida queimou !!!'); 
    }else if (temp > 3* botao[3] ){
            console.log('Kabumm !!!');          
    }else if (temp < botao[3] ) {
        console.log('tempo insuficiente !!!');
    }

    else if (temp == botao[4]  ){
        console.log('Prato pronto, bom apetite !!!');
    } else if (temp >= 2* botao[4]  && temp < 3* botao[4] ){
        console.log('A comida queimou !!!'); 
    }else if (temp > 3* botao[4] ){
            console.log('Kabumm !!!');          
    }else if (temp < botao[4] ) {
        console.log('tempo insuficiente !!!');
    }else 
    console.log ('Prato Inexistente')
}
tempMicronOndas(botao[0], 0.25);