import leia from "readline-sync"

export default function exercicio06(){
    let valor = 0
    for (let index = 1; index < 6; index++) {
        valor += leia.questionFloat(`DIGITE O VALOR DA CORRIDA ${index}: `);        
    }   
    let desconto = valor * 0.25
    let valorArrecadado = valor - desconto
    console.log(`VALOR ARRECADADO ${valor}`)
    console.log(`VALOR DE DESCONTO 25% ${desconto}`)
    console.log(`VALOR ARRECADADO ${valorArrecadado}`)

}