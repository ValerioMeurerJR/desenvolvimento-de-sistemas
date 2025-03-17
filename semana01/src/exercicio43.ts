import leia from "readline-sync"


// Crie um algoritmo que gere um vetor com 10 itens, depois disso,
// você deve percorrer a lista e verificar se existe algum valor duplicado.




export default function exercicio43() {
    let vetor: number[] = []
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.floor(Math.random() * 10)+1)
    }
    let duplicados = vetor.filter((valor, indice, array) => array.indexOf(valor) !== indice);
    console.table(vetor)
    if (duplicados.length > 0) {
        console.log("Valores duplicados encontrados:", [...new Set(duplicados)]);
    } else {
        console.log("Nenhum valor duplicado encontrado.");
    }
}
