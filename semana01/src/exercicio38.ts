import leia from "readline-sync"

// Crie um algoritmo para ler 15 números inteiros e mostrar no final, os que forem maiores ou igual a 10;



export default function exercicio38() {
    let vetorNumero: number[] = [];
    for (let i = 0; i < 10; i++) {
        vetorNumero.push(leia.questionInt(`INFORME O ${(i + 1)}° NUMERO: `))        
    }
    vetorNumero.forEach(valor => {
        if(valor >= 10){
            console.log(valor)
        }
    })
    
}
