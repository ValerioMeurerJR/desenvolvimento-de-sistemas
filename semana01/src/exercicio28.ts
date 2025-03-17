import leia, { questionInt } from "readline-sync"

// Valentina tem 1.50m e cresce 2 centímetros por ano, enquanto Joãozinho, seu irmão mais
// novo, tem 1.40m e cresce 3 centímetros por ano. Crie um algoritmo que mostre quando (quantos
// anos) Enzo será mais alto que Valentina.

export default function exercicio28() {
  let Valentina = 1.50, 
  Joaozinho = 1.40,
  anos = 0
  while(Valentina > Joaozinho) {
    anos++
    Joaozinho += 0.03
    Valentina += 0.02
  }
  console.log(`João ficara mais alto que Valentina em ${anos}.`)


}
