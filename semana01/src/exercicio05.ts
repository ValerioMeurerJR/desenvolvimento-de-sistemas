import leia from "readline-sync"

export default function exercicio05(){
    let celcius = leia.questionFloat("DIGITE O A TEMPERATURA EM CELCIUS: ");
    // var votosValidos = leia.questionInt("DIGITE QTD VOTOS VALIDOS: ");
    let Fahrenheit = (celcius * 1.8) + 32
    let Kelvin = celcius + 273;
    console.log()
    console.log(`TEMPERATURA EM CELCIUS: ${celcius}°C`)
    console.log(`TEMPERATURA EM FAHRENHEIT: ${Fahrenheit}°F`)
    console.log(`TEMPERATURA EM KELVIN: ${Kelvin}K`)
}

