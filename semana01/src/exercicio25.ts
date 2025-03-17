import leia, { questionInt } from "readline-sync"

// Contagem de 10 até 500, depois de 900 até 1000, usando apenas um laço de repetição.




export default function exercicio25() {
  for (let i = 10; i <= 1000; i++) {
    console.log(`${i}/${1000}`)
    i = i === 500 ? 899 : i
  }
}
