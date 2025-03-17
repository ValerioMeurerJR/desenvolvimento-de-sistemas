import leia from "readline-sync"

// Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. 
// Após exibir a soma, o programa deve mostrar também os números que o
// usuário digitou, um por linha.


export default function exercicio36() {
    let vetorNumero: number[] = [];
    let somatorio: number = 0;
    for (let i = 0; i < 5; i++) {
        vetorNumero.push(leia.questionInt(`INFORME O ${(i + 1)}° NUMERO: `))        
    }
    vetorNumero.forEach(valor => {
        somatorio += valor 
    })

    console.log(somatorio)
    vetorNumero.forEach(valor => console.log(valor))
    
}
