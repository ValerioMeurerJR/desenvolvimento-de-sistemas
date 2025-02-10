import leia, { question, questionFloat } from "readline-sync"

// Escreva um algoritmo que leia o nome de dois clientes de uma loja e o valor (em reais) que
// cada um desses clientes pagou por sua compra. O algoritmo deverá escrever: (a) o valor total pago
// pelos dois clientes; (b) o valor médio das compras efetuadas; (c) os nomes dos clientes que
// efetuaram compras superiores a 20 reais.

export default function exercicio13() {  
  let clientes = []
  let qnt = 1
  var nome
  while(nome = question(`INFOME O NOME DO ${qnt} CLIENTE: `)){    
    let valor = questionFloat(`DIGITE O VALOR GASTO: `)
    const cliente = {
      nome: nome,
      valor: valor
    }
    qnt++;
    clientes.push(cliente)
    console.log("DEIXE O CAMPO NOME EM BRANCO PARA SAIR!!!")
  }
  let total = clientes.reduce((total, valor) => total + valor.valor, 0);
  let mediaCompras = total / clientes.length
  clientes.forEach(cliente => {
    if(cliente.valor >= 20){
      console.log(`CLIENTE ${cliente.nome} GASTOU R$ ${cliente.valor}`)
    }
  })  
  console.log(`TOTAL GASTO: R$ ${total.toFixed(2)}`)
  console.log(`MÉDIA GASTO: R$ ${mediaCompras.toFixed(2)}`)
}

