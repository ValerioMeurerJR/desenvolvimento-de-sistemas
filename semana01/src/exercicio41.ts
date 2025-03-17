import leia from "readline-sync"

// Crie um vetor de 50 posições, um chamado pai e uma vetora de 50
// posições chamada mãe. Estes dois vetores devem ser preenchidos
// com valores aleatórios. Depois, crie mais um vetorzinho de 50 posições
// chamado filho. Este vetorzinho filho deve ser preenchido com as
// características genéticas pares do pai e com as características
// genéticas ímpares da mãe





export default function exercicio41() {
    let Pai: number[] = []
    let Mae: number[] = []
    let Filho: number[] = []
    for (let i = 0; i < 50; i++) {
        Pai.push(Math.floor(Math.random() * 100)+20)
        Mae.push(Math.floor(Math.random() * 100)+10)
    }
    for (let i = 0; i < 50; i++) {
        if(i % 2 === 0){
            Filho.push(Pai[i]) 
        }else{
            Filho.push(Mae[i]) 
        }
    }
    console.table(Pai)
    console.table(Mae)
    console.table(Filho)
}
