import leia from "readline-sync"

// Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um
// cofrinho que contenha:
// a) N moedas de 1 real;
// b) N moedas de 50 centavos;
// c) N moedas de 25 centavos;
// d) N moedas de 10 centavos;
// e) N moedas de 5 centavos;
// O programa deverá verificar se o total de reais que contém no cofrinho é o bastante para
// compra o produto X.


export default function exercicio14() {
  let precoProduto = leia.questionFloat("INFORME O VALOR DO PRODUTO: ")
  let UmReal = leia.questionFloat("INFORME A QUANTIDADE DE MOEDA DE 1 REAL: ")
  let cinquenta = leia.questionFloat("INFORME A QUANTIDADE DE MOEDA DE 0,50 CENTAVOS: ")
  let vinteCinco = leia.questionFloat("INFORME A QUANTIDADE DE MOEDA DE 0,25 CENTAVOS: ")
  let dez = leia.questionFloat("INFORME A QUANTIDADE DE MOEDA DE 0,10 CENTAVOS: ")
  let cinco = leia.questionFloat("INFORME A QUANTIDADE DE MOEDA DE 0,05 CENTAVOS: ")

  const totalCofrinho= (cinquenta * 0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco * 0.05) + UmReal

  if(totalCofrinho >= precoProduto){
    console.log(`VOCE TEM O VALOR R$${totalCofrinho.toFixed(2)} E O SUFICIENTE PARA COMPRAR O PRODUTO`)
  }else{
    console.log(`VOCE TEM O VALOR R$${totalCofrinho.toFixed(2)} QUE NÃO SUFICIENTE PARA COMPRAR O PRODUTO`)
  }

}
