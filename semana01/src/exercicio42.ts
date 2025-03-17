import leia from "readline-sync"

// Crie 3 vetores de 9 posições e crie outro com o 1º terço do primeiro,
// o segundo 3º. do segundo e o último terço do 3º. Escrever o vetor
// resultante ao final.

export default function exercicio42() {
    let v1: number[] = []
    let v2: number[] = []
    let v3: number[] = []
    let vR: number[] = []
    for (let i = 0; i < 9; i++) {
        v1.push(Math.floor(Math.random() * 100)+20)
        v2.push(Math.floor(Math.random() * 100)+20)
        v3.push(Math.floor(Math.random() * 100)+20)
    }
    for (let i = 0; i < 3; i++) {
        vR.push(v1[i])
    }
    for (let i = 3; i < 7; i++) {
        vR.push(v2[i])
    }
    for (let i = 6; i < 9; i++) {
        vR.push(v3[i])
    }
    console.table(v1)
    console.table(v2)
    console.table(v3)
    console.table(vR)
}
