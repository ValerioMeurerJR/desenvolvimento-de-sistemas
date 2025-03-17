import leia from "readline-sync"

// Escreva um algoritmo que conta os números entre 1000 e 1999 e mostra apenas aqueles que
// divididos por 11 dão resto 5.


export default function exercicio20() {

  for (let i = 1000; i < 1999; i++) {
    if (i % 11 === 5) {
      console.log(i)
    }
  }

}
