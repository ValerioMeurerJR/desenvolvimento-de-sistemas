import leia from "readline-sync"

//  Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes elementos,
// de tal modo que o primeiro elemento venha a ser o último depois da inversão;



export default function exercicio39() {
    let vetorNumero: number[] = [];
    let vetorTemp: number[] = [];
    for (let i = 0; i < 10; i++) {
        let Aleatorio = Math.random();
        let multi = Math.pow(10, 1);
        Aleatorio = Aleatorio * multi;
        vetorNumero.push(Math.floor(Aleatorio))
    }
    let j = 0
    let q = vetorNumero.length
    for (let j = vetorNumero.length - 1; j >= 0; j--) {
        vetorTemp.push(vetorNumero[j])
    }
    console.group()
    console.table(vetorNumero)
    console.table(vetorTemp)
    console.groupEnd()
}
