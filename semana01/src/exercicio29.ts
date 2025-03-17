import leia, { questionFloat, questionInt } from "readline-sync"

// Foi feita uma pesquisa entre os habitantes de um a região e coletados os dados de altura e
// gênero (0=masc , 1=fem) das pessoas. Faça um programa que leia os dados de 10 pessoas e
// informe:
// – A MAIOR E A MENOR ALTURA ENCONTRADA;
// – A MÉDIA DE ALTURA DAS MULHERES;
// – A MÉDIA DE ALTURA DA POPULAÇÃO;
// – O PERCENTUAL DE HOMENS NA POPULAÇÃO.


export default function exercicio29() {
  let mediaM= 0
  let mediaP=0
  let maior, menor
  let qntHomem= 0, qntMulher=0
  for (let i = 0; i < 3; i++) {
    var opcao = leia.keyInSelect(['masc', 'fem'])
    let altura = leia.questionFloat("DIGITE A ALTURA: ");
    mediaP += altura
    if(opcao == 0){
      qntHomem++
    } else if (opcao == 1){ 
      qntMulher++
      mediaM += altura
    } else {
      console.log("GENERO NÃO INFORMADO")
      break;      
    }
    if(maior == undefined || altura > maior){
      maior = altura;
    }
    if(menor == undefined || menor > altura){
      menor = altura;
    }
  }
  let porcntual = (qntHomem / (qntMulher + qntHomem)) * 100;
  console.log(`A MAIOR E A MENOR ALTURA ENCONTRADA: ${maior}M, ${menor}M`)
  console.log(`A MÉDIA DE ALTURA DAS MULHERES: ${(mediaM / qntMulher).toFixed(2)}M`)
  console.log(`A MÉDIA DE ALTURA DA POPULAÇÃO: ${(mediaP / (qntMulher + qntHomem)).toFixed(2)}M`)
  console.log(`O PERCENTUAL DE HOMENS NA POPULAÇÃO: ${porcntual.toFixed(2)}%`)
}
