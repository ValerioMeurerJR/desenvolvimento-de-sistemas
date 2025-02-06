import leia from "readline-sync"

export default function exercicio01(){
    let numero = leia.questionInt("Digite um numero: ");
    console.log(`Numero digitado foi: ${--numero}`)
}