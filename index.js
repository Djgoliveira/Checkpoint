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

function microOndas(botao, time=0){

  //Validar se está pronto
  
  if (botao == 1 && time == 0.10){
    return('A Pipoca está pronta, bom apetite!');
  }else if (botao == 2 && time == 0.08){
    return('O Macarrão está pronto, bom apetite!');
  } else  if (botao == 3 && time == 0.15){
    return('A Carne está pronta, bom apetite!');
  }else if (botao == 4 && time == 0.12){
    return('O Feijão está pronto, bom apetite!');
  }else if (botao == 5 && time == 0.08){
    return('O Brigadeiro está pronto, bom apetite!');
  }else if (botao > 5 && time > 0) {
    return('Prato Inexistente');
  }

  //Validar tempo insuficiente
  if (botao == 1 && time < 0.10){
    return 'Tempo insuficiente';
  }else if (botao == 2 && time < 0.08){
    return 'Tempo insuficiente';
  } else  if (botao == 3 && time < 0.15){
    return 'Tempo insuficiente';
  }else if (botao == 4 && time < 0.12){
    return 'Tempo insuficiente';
  }else if (botao == 5 && time < 0.08){
    return 'Tempo insuficiente';
  }

  //Validar tempo 2x
  if (botao == 1 && time > 0.10 && time < 0.10 *3 ){
    return 'A Pipoca Queimou';
  }else if (botao == 2 && time > 0.08 && time < 0.08 *3){
    return 'O Macarrão Queimou';
  } else  if (botao == 3 && time > 0.15 && time < 0.15 *3){
    return 'A Carne Queimou';
  }else if (botao == 4 && time > 0.12 && time < 0.12 *3){
    return 'O Feijão Queimou'
  }else if (botao == 5 && time > 0.08 && time < 0.08 *3){
    return 'O Brigadeiro Queimou';;
  }

   //Validar tempo 3x
  else if (botao == 1 && time >= 0.10 * 3){
    return 'Kabumm!!!';
  }else if (botao == 2 && time >= 0.08 * 3){
    return 'Kabumm!!!';
  } else  if (botao == 3 && time >= 0.15*3){
    return 'Kabumm!!!';
  }else if (botao == 4 && time >= 0.12 * 3){
    return 'Kabumm!!!';
  }else if (botao == 5 && time >= 0.08 * 3){
    return 'Kabumm!!!';
  }
}

console.log(microOndas(1, 0.51));
console.log(microOndas(2, 0.59));
console.log(microOndas(3,0.56));
console.log(microOndas(4, 0.53));
console.log(microOndas(5, 0.59));



