function menorValor(arrProdutos, posicaoInicial){
    let maisbarato = posicaoInicial // se refere ao indice do valor mais barato
    let maiscaro = posicaoInicial // se refere ao indice do valor mais barato
    
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisbarato].preco){
            maisbarato = atual
        } 
    }
    return maisbarato
}
 module.exports = menorValor
 
/*const precosLivros = [25, 15, 30, 50, 45, 35]

let maisbarato = precosLivros[0]

for(let atual = 0; atual < precosLivros.length; atual++){
    

    if(precosLivros[atual] < maisbarato){
        maisbarato = precosLivros[atual]
    }
}

console.log(`O livro mais barato custa ${maisbarato} reais`)*/