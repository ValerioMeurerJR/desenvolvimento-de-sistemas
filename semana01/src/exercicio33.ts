import leia from "readline-sync"

// Crie um algoritmo para realizar a conversão de um número inteiro decimal, para binário. Vale
// lembrar, que para realizar esse exercícios, vocês devem usar a técnica da divisão.



export default function exercicio33() {
  let numero = leia.questionInt("INFORME UM NUMERO: ");
  let Binario = ""
  do{
      Binario = (numero % 2) + Binario 
      numero =  Math.floor(numero / 2)
      console.log(Binario)
  } while (numero >= 1)
      //Binario = numero + Binario 
      console.log(Binario)
}
