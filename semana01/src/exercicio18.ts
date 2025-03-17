import leia from "readline-sync"

// Faça um algoritmo que leia um número e mostre os números de 0 até o valor informado pelo
// usuário.


export default function exercicio18() {
  let numero = leia.questionInt("INFORME UM NUMERO: ")

  for (let i = 0; i <= numero; i++) {    
    console.log(`${i}/${numero}`)
  }

}
