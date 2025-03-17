import leia from "readline-sync"

// Crie um algoritmo para ler 10 números inteiros e mostrar os números pares deste vetor;



export default function exercicio37() {
    let vetorNumero: number[] = [];
    for (let i = 0; i < 10; i++) {
        vetorNumero.push(leia.questionInt(`INFORME O ${(i + 1)}° NUMERO: `))        
    }
    vetorNumero.forEach(valor => {
        if(valor % 2 === 0){
            console.log(valor)
        }
    })
    
}
