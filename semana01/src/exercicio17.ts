import leia from "readline-sync"

// Faça um programa de computador que realiza o cálculo do salário dos funcionários que é composto
// por um salário fixo mais uma certa porcentagem pela qtd de dependentes do funcionário. Solicite o
// nome do funcionário, salário fixo e também a quantidade de dependentes e por fim exiba o seu salário
// final.
// 0 Dependente 2%
// 1 Dependente 5%
// 2 Dependentes 7%
// 3 Dependentes 10%
// 4 ou mais dependentes 15%

export default function exercicio17() {
  let nomeCompleto = leia.question("INFORME O NOME COMPLETO: ")
  let salario = leia.questionFloat("INFORME O SALARIO: ")
  let qntDependente = leia.questionInt("INFORME QNT DE DEPENDENTES: ")

  let salarioLiquido = 0
  if(qntDependente == 0){
    salarioLiquido = salario * 0.02 + salario
  } else if(qntDependente == 1){
    salarioLiquido = salario * 0.05 + salario
  } else if(qntDependente == 2){
    salarioLiquido = salario * 0.07 + salario    
  } else if(qntDependente == 3){
    salarioLiquido = salario * 0.10 + salario   
  } else {
    salarioLiquido = salario * 0.15 + salario   
  }
  console.log(`O ${nomeCompleto} POSSUI ${qntDependente} DEPENDENTES, SEU SALARIO TOTAL E R$ ${salarioLiquido.toFixed(2)}`)
}
