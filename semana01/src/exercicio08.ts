import leia from "readline-sync"

export default function exercicio08() {
    var opcao = leia.keyInSelect([
        'PARA DOAR R$ 10,00',
        'PARA DOAR R$ 25,00',
        'PARA DOAR R$ 50,00',
        'PARA DOAR OUTRO VALOR'
    ]) + 1

    let doacao = 0;
    switch (opcao) {
        case 1:
            doacao = 10
            break;
        case 2:
            doacao = 25
            break;
        case 3:
            doacao = 50
            break;
        case 4:
            doacao = leia.questionFloat("INFORME O VALOR QUE DEJESA DOAR: ")
            break;
        default:
            console.log("LAMENTO POR NÃO PODE DOAR")
            break;
    }
    if (opcao != 0) {
        console.log(`MUITO OBRIGADO PELA DOAÇÃO DE R$ ${doacao.toFixed(2)}`)
    }
}