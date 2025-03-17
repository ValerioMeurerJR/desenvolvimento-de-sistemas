import leia from "readline-sync"

// Faça um algoritmo que receba um número e ele calcule o fatorial desse número. O Fatorial, é o número vezes todos os valores multiplicados até 1.



export default function exercicio32() {
  let numero = leia.questionInt("DIGITE UM NUMERO: ")
  let resultado = 1
  while(numero > 0){
      resultado = resultado * numero
      numero--;
  }
  console.log("FATORIAL E: " + resultado)
}
