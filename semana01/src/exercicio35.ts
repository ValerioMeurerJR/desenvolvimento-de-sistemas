import leia from "readline-sync"
// Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em um
// vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5. Por fim exiba os
// dois vetores.
export default function exercicio35() {
    let vetorNumero: number[] = [];
    let vetorMultiplicado: number[] = [];
    for (let i = 0; i < 10; i++) {
        vetorNumero.push(leia.questionInt(`INFORME O ${(i + 1)}° NUMERO: `))        
    }
    vetorNumero.forEach(valor => {
        vetorMultiplicado.push(valor * 5)
    })

    // let j =0;
    // while(j < vetorNumero.length){
    //     vetorMultiplicado[j] = vetorNumero[j] * 5
    //     j++
    // }

    console.table(vetorNumero)
    console.table(vetorMultiplicado)
    
}
