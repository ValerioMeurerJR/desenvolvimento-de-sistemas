export default function exercicio28() {
    let valentina = 1.50;
    let joaozinho = 1.40;
    let anos = 0;

    while (valentina >= joaozinho) {
        valentina = valentina + 0.02;
        joaozinho = joaozinho + 0.03;
        anos++;
    }

    console.log(`O JOÃOZINHO VAI PASSAR A ALTURA DA VALENTINA EM ${anos} ANOS`)
}