import leia from "readline-sync"

// Desenvolva um algoritmo, que com base na quantidade de gols feitos por dois times em uma
// partida, deve informar se houve EMPATE, ou se foi uma PARTIDA NORMAL ou se houve uma GOLEADA.
// Diferença de gols for 0 – EMPATE
// Diferença de gols 1, 2 ou 3 – PARTIDA NORMAL
// Diferença de gols > 4 – GOLEADA

export default function exercicio16() {
  let qntGolTimeA = leia.questionInt("INFORME O NUMERO DE GOLS DO TIME A: ")
  let qntGolTimeB = leia.questionInt("INFORME O NUMERO DE GOLS DO TIME B: ")

  let gols = Math.abs(qntGolTimeA - qntGolTimeB)
  
  if(gols == 0){
    console.log("EMPATE")
  } else if(gols > 0 && gols < 4){
    console.log("PARTIDA NORMAL")
  } else {
    console.log("GOLEADA")
  }
}
