//Conhecidos os números inteiros m e n, o número m será múltiplo de n se
// e somente se, existir um número inteiro k, de modo que:
//m = n ∙ k
const multiploNumero =(param1, param2) =>{
       
    for ( let multiplo=1; multiplo <= 100; multiplo++){        
         if (multiplo % param1 === 0 && multiplo % param2 === 0){
          console.log (`FIZZBUZZ : Os números ${param1} e ${param2} são multiplos do número ${multiplo}`);  
          } else if (param1 === param2){
            return (`FIZZBUZZ : Os números ${param1} e ${param2} são iguais`); 
          }else if (multiplo % param1 === 0){
            console.log (`FIZZ : O número ${param1} é multiplo do número ${multiplo}`);  
          } else if (multiplo % param2 === 0){
            console.log(`BUZZ : O número ${param2} é multiplo do número ${multiplo}`);  
          }          
    }  
}
multiploNumero(10,3);
 