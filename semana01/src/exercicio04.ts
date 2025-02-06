import leia from "readline-sync"

export default function exercicio04(){
    let eleitores = leia.questionInt("DIGITE O TOTAL DE VOTOS DE ELEITORES: ");
    let votosBrancos = leia.questionInt("DIGITE QTD VOTOS BRANCOS: ");
    let votosNulos = leia.questionInt("DIGITE QTD VOTOS NULOS: ");
    // var votosValidos = leia.questionInt("DIGITE QTD VOTOS VALIDOS: ");
    let nuloPorcentual = (votosNulos / eleitores) * 100;
    let brancoPorcentual = (votosBrancos / eleitores) * 100;
    let validosPorcentual = ((eleitores - (votosBrancos + votosNulos)) / eleitores) * 100;
    console.log()
    console.log(`PORCENTAGEM NULOS: ${nuloPorcentual.toFixed(2)} %`)
    console.log(`PORCENTAGEM BRANCOS: ${brancoPorcentual.toFixed(2)} %`)
    console.log(`PORCENTAGEM VÁLIDOS: ${validosPorcentual.toFixed(2)} %`) 
}

