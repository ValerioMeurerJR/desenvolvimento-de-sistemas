import leia from "readline-sync"

export default function exercicio02(){
    let largura = leia.questionInt("Digite a largura: ");
    let altura = leia.questionInt("Digite a altura: ");
    let area = largura * altura    
    console.log(`A area do retangulo com largura ${largura} e altura ${altura} è ${area}`)

}