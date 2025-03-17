import leia from "readline-sync"


// Crie uma matriz 8x8 com números aleatórios e posteriormente
// escreva na tela, quais são maiores que 10;

export default function exercicio45() {
    let matriz: any[] = []
    for (let i = 0; i < 8; i++) {
        let lista: number[] = []
        for (let a = 0; a< 8; a++) {
            lista.push((Math.floor(Math.random() * 15) + 1))
        }
        matriz[i] = lista
    }
    console.table(matriz)    

    matriz.forEach((lista: any[]) => {
        lista.forEach(valor => {
            if(valor >= 10){
                console.log(valor)
            }
        })
    })

    console.group()
    console.log('I am in a group')
    console.log('I am also in a group')
    console.groupEnd()
}
