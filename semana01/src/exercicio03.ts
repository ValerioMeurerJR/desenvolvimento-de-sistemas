import { differenceInDays } from "date-fns";
import leia from "readline-sync"

export default function exercicio03(){
    // var diaNascimento = leia.questionInt("Digite a dia nascimento: ");
    // let mesNascimento = leia.questionInt("Digite a Mes: ");
    // let anoNascimento = leia.questionInt("Digite a Ano: ");
    // let data = new Date();
    // let dias = ((data.getMonth() + 1) * 30) + (data.getFullYear() * 365) + data.getDate()
    // let diasNascimento = (mesNascimento * 30) + (anoNascimento * 365) + diaNascimento
    // let diastotal = dias - diasNascimento 
    // console.log(diastotal)
    
    var dataNascimento = leia.questionInt("Digite a data de nascimento: ");
    const dateFormat = new Date(dataNascimento)
    const date = new Date()
    const dias = differenceInDays(date, dateFormat)
    console.log(`NUMERO DE DIAS: ${dias}`)
}