import leia, { questionInt } from "readline-sync"

// Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos e mostre a
// soma dos números ímpares e o produto (multiplicação) dos números pares. 



export default function exercicio26() {
  let impar= 0, par = 1;
  for (let i = 0; i < 6; i++) {
    let numero = questionInt("DIGITE UM NUMERO: ")
    if(numero %2 === 0){
      par *= numero
    } else {
      impar += numero
    }
  }
  console.log(`NUMERO PAR MULTIPLICADO É ${par}`)  
  console.log(`NUMERO IMPAR SOMADO É ${impar}`)  
}
