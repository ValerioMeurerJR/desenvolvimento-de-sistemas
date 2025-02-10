import leia from "readline-sync"

export default function exercicio09() {
  while("1234" != leia.question("DIGITE A SENHA: ")){
    console.log("SENHA INCORRETA");
  }
  console.log("ACESSO PERMITIDO.")
}