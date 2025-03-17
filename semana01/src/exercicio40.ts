import leia from "readline-sync"

// Criem um algoritmo que tenha dois vetores de 30 posições, um
// para armazenar a mínima de cada dia e outro para a máxima;
// - Usando a função Math.random(), gerem dois valores de
// temperatura para o dia. Estes valores devem estar entre 12 e 35
// graus.
// - De posse destes dois valores gerados, coloquem o menor no
// vetor de mínimas e o maior no vetor de máximas.




export default function exercicio40() {
    let TempMax: number[] = [];
    let TempMin: number[] = [];
    for (let i = 0; i < 30; i++) {
        let valorA = Math.floor(Math.random() * 23 + 12);
        let valorB = Math.floor(Math.random() * 23 + 12);

        if(valorA > valorB){
            TempMax.push(valorA)
            TempMin.push(valorB)
        }else{
            TempMax.push(valorB)
            TempMin.push(valorA)
        }
    }
    console.log(TempMax)
    console.log(TempMin)
}
