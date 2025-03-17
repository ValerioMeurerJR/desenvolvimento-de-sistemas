import leia, { questionInt } from "readline-sync"

// Você está desenvolvendo um software para calcular preços do xerox de uma papelaria. Cada
// cópia custa R$0,33. Crie um algoritmo que mostre os valores de quanto custa 1 cópia até quanto
// custa 500 cópias.



export default function exercicio23() {
  for (let i = 1; i <= 500; i++) {
    console.log(`${i} CUSTA R$ ${(i*0.33).toFixed(2)}`)    
  }
}
