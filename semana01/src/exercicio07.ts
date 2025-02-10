import leia from "readline-sync"

export default function exercicio07(){
    let valorCompra = leia.questionFloat(`DIGITE O VALOR DO PRODUTO: `);    
    let valorVenda = 0
    if(valorCompra < 20){
        valorVenda = valorCompra + (valorCompra * 0.45)
    }else{
        valorVenda = valorCompra + (valorCompra * 0.30)
    }    
    console.log(`VALOR DE COMPRA R$ ${valorCompra.toFixed(2)}`)
    console.log(`VALOR DE VENDA R$ ${valorVenda.toFixed(2)}`)
}