import leia from "readline-sync"

export default function exercicio11() {
  let placa = leia.question("DIGITE A PLACA: ")
  let ultimoDigito = placa[placa.length - 1];
  if(ultimoDigito == "0" || ultimoDigito == "1"){
    console.log("NÃO PODE RODAR NA SEGUNDA-FEIRA;")
  } else if(ultimoDigito == "2" || ultimoDigito == "3"){
    console.log("NÃO PODE RODAR NA TERÇA-FEIRA;")
  } else if(ultimoDigito == "4" || ultimoDigito == "5"){
    console.log("NÃO PODE RODAR NA QUARTA-FEIRA;")
  } else if(ultimoDigito == "6" || ultimoDigito == "7"){
    console.log("NÃO PODE RODAR NA QUINTA-FEIRA;")
  } else {
    console.log("NÃO PODE RODAR NA SEXTA-FEIRA;")
  }

}

