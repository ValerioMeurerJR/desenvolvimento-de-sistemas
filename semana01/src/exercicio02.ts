import leia from "readline-sync"

export default function exercicio02(){
    let largura = leia.questionFloat("Digite a largura: ");
    let altura = leia.questionFloat("Digite a altura: ");
    let area = largura * altura    
    console.log(`A area do retangulo com largura ${largura} e altura ${altura} è ${area}`)

}