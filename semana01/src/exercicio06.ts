import leia from "readline-sync"

export default function exercicio06(){
    let valor = 0
    for (let index = 1; index < 6; index++) {
        valor += leia.questionFloat(`DIGITE O VALOR DA CORRIDA ${index}: `);        
    }   
    let desconto = valor * 0.25
    let valorArrecadado = valor - desconto
    console.log(`VALOR DAS CORRIDAS: R$ ${valor.toFixed(0)}`)
    console.log(`VALOR DE DESCONTO 25%: R$ ${desconto.toFixed(0)}`)
    console.log(`VALOR ARRECADADO PELO MOTORISTA: R$ ${valorArrecadado.toFixed(0)}`)

}