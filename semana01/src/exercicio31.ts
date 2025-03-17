import leia from "readline-sync"

// Crie um algoritmo que receba um número e que ele mostre os números da sequência fibonacci.
// (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência fibonacci).
// Lembrando que a sequência fibonacci, sempre é a soma dos dois números anteriores, começando
// sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5.


export default function exercicio31() {
  let numero = leia.questionInt("DIGITE ATE QUAL VALOR QUER: ")
  let anterior = 1;
  let atual = 1;
  let proximo;
  let resultado = "1 - 1"
  for(let i = 2; i < numero; i++){
      proximo = anterior + atual;
      anterior = atual;
      atual=proximo
      resultado = resultado + " - " +  proximo
  }
  console.log(resultado)

}
