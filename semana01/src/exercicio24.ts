import leia, { questionInt } from "readline-sync"

// Crie um algoritmo para mostrar a tabuada de um número até 10. Você deve solicitar ao usuário
// o número do qual ele deseja a tabuada. O algoritmo deve mostrar a tabuada de um número que
// ele digitar.



export default function exercicio24() {
  let numero = questionInt("DIGITE UM NUMERO: ")
  let tabuada = []
  for (let i = 0; i <= 9; i++) {
    const soma = {
      formula: `${numero} X ${i}`,
      resultado: (i*numero)
    }
    tabuada.push(soma)
  }

  console.table(tabuada)
}
