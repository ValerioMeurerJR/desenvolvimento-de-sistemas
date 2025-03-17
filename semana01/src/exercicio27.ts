import leia, { questionInt } from "readline-sync"

// Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200 foram
// digitados (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido.

export default function exercicio27() {
  let numero, qnt = 0;
  while (numero = questionInt("DIGITE UM NUMERO: ")) {
    if(numero === 0){
      return;
    }
    if(numero > 100 && numero < 200){
      qnt++;
    }    
  }
  console.log("QUANTIDADE DE VEZES DIGITADOS: " + qnt)
}
