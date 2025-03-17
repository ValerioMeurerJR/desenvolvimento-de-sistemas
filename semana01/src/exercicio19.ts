import leia from "readline-sync"

// Faça um programa que leia um número e mostre os números de do valor informado até 0.

export default function exercicio19() {
  let numero = leia.questionInt("INFORME UM NUMERO: ")

  for (let i = numero; i >= 0; i--) {    
    console.log(`${i}/${numero}`)
  }
}
