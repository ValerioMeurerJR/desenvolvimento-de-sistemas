import leia from "readline-sync"

// Você está fazendo um software para o cadastro da viagem da turma. Escreva um programa que
// solicite ao usuário sua idade e verifique se ele é maior de idade. Se for maior de idade, peça o nome
// completo. Caso contrário, peça a permissão dos pais e depois o nome completo do usuário.

export default function exercicio15() {
  let permissao = ''
  let idade = leia.questionInt("INFORME A SUA IDADE: ")
  if (idade < 18) {
    permissao = leia.question("PERMISSÃO DOS PAIS: ")
  }

  let nomeCompleto = leia.question("INFOME O NOME COMPLETO: ")

  console.log(`USUARIO ${nomeCompleto}, IDADE ${idade} FOI CADASTRADO COM SUCESSO`)

}
