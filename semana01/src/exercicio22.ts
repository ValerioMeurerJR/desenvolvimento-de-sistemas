import leia, { questionInt } from "readline-sync"

// Escreva um algoritmo que leia 15 valores inteiros e, ao final, mostre qual foi o maior e o menor
// entre os valores digitados


export default function exercicio22() {
  let maior, menor;
  for (let i = 1; i <= 15; i++) {
    let numero = questionInt(`DIGITE O ${i}° NUMERO: `);
    if(menor == undefined || numero < menor){
      menor = numero
    }
    if(maior == undefined || numero > maior){
      maior = numero
    }
  }
  console.log(`MAIOR VALOR: ${maior}, MENOR VALOR: ${menor}`)
}
