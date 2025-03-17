import leia from "readline-sync"


// Criar um vetor de 4 posições e solicitar ao usuário que forneça 4
// números pares para armazenar nele. Caso o usuário digite um número
// ímpar, o algoritmo deve avisar e solicitar um novo valor.





export default function exercicio44() {
    let vetor: number[] = []
    let j = 0
    while (j < 4) {
        let valor = leia.questionInt("DIGITE UM NUMERO PAR: ")
        if(valor % 2 === 0){
            j++
            vetor.push(valor)
        } else {
            console.log("NUMERO INFORMADO NÃO E PAR.")
        }
    }
    console.log(vetor)

}
