import leia from "readline-sync"

// As maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou mais
// cada uma custa apenas R$0,25. Crie um programa para ler o número de maçãs que ele vai
// comprar e informar quanto será o total da compra.

export default function exercicio12() {
  let quantidadeMaca = leia.questionInt("DIGITE O NUMERO DE MAÇÃS: ")
  let valor = 0
  if(quantidadeMaca < 12){
    valor = quantidadeMaca * 0.30
  }else{
    valor = quantidadeMaca * 0.25
  }
  console.log(`VOCE ESTA LEVANDO ${quantidadeMaca} MAÇÃS, VALOR A PAGAR É R$${valor.toFixed(2)}`)
  
}

