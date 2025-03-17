import leia from "readline-sync"

// Faça um algoritmo que receba o nome de 10 estudantes e para cada estudante receba 3
// notas. O algoritmo deve calcular a média dos 10 estudantes e mostrar o nome e média do
// estudante que teve a maior média.



export default function exercicio34() {
    let cont= 0
    let notaMedia = 0;
    let mediaturma = 0;
    let melhorestudante = 0;
    let nomemelhorestudante;
    for(let i = 0; i < 2; i++){
        let Nome = leia.question("INFORME O NOME: ");        
        for(let e = 0; e < 3; e++){
            let nota = leia.questionFloat("INFORME A " + e + "NOTA: ")
            notaMedia += nota;
            cont++
        }        
        mediaturma += notaMedia;
        console.log(mediaturma)
        let notaM = notaMedia / 3
        notaMedia = 0;
        if(i === 0){
            melhorestudante = notaM
            nomemelhorestudante = Nome;
        }
        if(melhorestudante < notaM){
            melhorestudante = notaM
            nomemelhorestudante = Nome;
        }
    }
    console.log("MEDIA DA TURMA: " + (mediaturma / cont).toFixed(2));
    console.log("MELHOR ESTUDANTE: " + nomemelhorestudante);
    console.log("MEDIA: " + melhorestudante.toFixed(2));
}
