import leia from "readline-sync"

export default function exercicio10() {
  let numero = leia.questionInt("DIGITE UM NUMERO: ")
  if(numero %2 === 0) {
    console.log("NUMERO DIGITADO E PAR")
  }else{
    console.log("NUMERO DIGITADO E IMPAR")
  }
}