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

function microOndas(btn =0, time=0){
    if (btn == 1){
        return pipoca(time);
    }else if ( btn == 2){
        return macarrao(time);
    }else if (btn == 3){
        return carne(time);
    }else if(btn == 4){
        return feijao(time);
    }else if(btn == 5){
        return brigadeiro(time);
    }else
    return "Prato não encontrado";
}

function pipoca(time=0){
    if (time >= 2 * 0.10 && time < 3 * 0.10){
        return 'Você escolheu o prato Pipoca, mas a Pipoca queimou';
    }else if (time >= 3 * 0.10){
        return 'Kabumm!!!';
    }else if ( time < 0.10 ){
        return 'Você escolheu o prato Pipoca, mas o tempo é insuficiente';
    }else
    return 'Pipoca pronta, bom Apetite';
}

function macarrao(time=0.08){
    if (time >= 2 * 0.08  && time < 3 *0.08){
        return 'Você escolheu o prato Macarrão, mas a Macarrão queimou';
    }else if (time >= 3 * 0.08){
        return 'Kabumm!!!';
    }else if ( time < 0.08 ){
        return 'Você escolheu o prato Macarrão, mas o tempo é insuficiente';
    }else
    return 'Macarrão pronto, bom Apetite';
}

function carne(time=0.15){
    if (time > 2 * 0.15 && time < 3 * 0.15){
        return 'Você escolheu o prato Carne, mas a Carne queimou';
    }else if (time >= 3 * 0.15){
        return 'Kabumm!!!';
    }else if ( time < 0.15 ){
        return 'Você escolheu o prato Carne, mas o tempo é insuficiente';
    }else
    return 'Carne pronta, bom Apetite';
}

function feijao(time=0.12){
     if (time > 2 * 0.12 && time < 3 * 0.12){
        return 'Você escolheu o prato Feijão, mas a Feijão queimou';
    }else if (time >= 3 * 0.12){
        return 'Kabumm!!!';
    }else if ( time < 0.12 ){
        return 'Você escolheu o prato Feijão, mas o tempo é insuficiente';
    }else
    return 'Feijão pronto, bom Apetite';
}

function brigadeiro(time=0.08){
    if (time > 2 * 0.08 && time < 3 * 0.08){
        return 'Você escolheu o prato Brigadeiro, mas a Brigadeiro queimou';
    }else if (time >= 3 * 0.08){
        return 'Kabumm!!!';
    }else if ( time < 0.08 ){
        return 'Você escolheu o prato Brigadeiro, mas o tempo é insuficiente';
    }else
    return 'Brigadeiro pronto, bom Apetite';
}


console.log(microOndas(1,0.09));
