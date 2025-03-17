import leia, { questionFloat, questionInt } from "readline-sync"

// Vamos desenvolver um jogo pra gente se divertir um pouco com a criançada, trata-se do
// “Número mágico”. Neste jogo um número deve ser cadastrado pelo ‘mestre’ (PvP) ou sorteado pelo
// game (PvE) e o desafiante deve tentar adivinhar. A cada tentativa incorreta o sistema informa se o
// chute foi mais alto ou mais baixo que o número mágico. Quando o desafiante acertar o game
// informar em quantas tentativas ele conseguiu. No início do jogo o jogador escolhe entre PvP e PvE.- Sistema de dificuldade para o PvE, onde o jogador escolhe a dificuldade e ela influencia o
// tamanho do range possível para o número mágico.



export default function exercicio30() {
    let modo = leia.keyInSelect(["PVP", "PVE"], "ESCOLHA UMA DOS MODOS")
    let NMagico;
    switch (modo) {
        case 0:
            NMagico = leia.questionInt("INFORME O NUMERO MAGICO: ", { hideEchoBack: true });
            break;
        case 1:
            let Dificuldade = leia.keyInSelect(["FACIL", "MEDIO", "DIFICIL", "EXTREMO"], "ESCOLHA UMA DOS MODOS") + 2
            let Aleatorio = Math.random();
            let multi = Math.pow(10, Dificuldade);
            Aleatorio = Aleatorio * multi;
            NMagico = Math.floor(Aleatorio);
            break;
        default:
            return;
    }
    let valor;
    let cont = 0;
    while (true) {
        cont++;
        valor = leia.questionInt("DIGITE O PALPITE: ");
        if (valor != NMagico) {
            if (valor < NMagico) {
                console.log("O NUMERO INFORMADO E MENOR QUE O NUMERO MAGICO");
            } else if (valor > NMagico) {
                console.log("O NUMERO INFORMADO E MAIOR QUE O NUMERO MAGICO");
            }
        } else {
            console.log("PARABENS VOCE ACERTO: " + NMagico);
            console.log("VOCE ACERTO EM : " + cont + " TENTATIVAS");
            break;
        }

    }

}
