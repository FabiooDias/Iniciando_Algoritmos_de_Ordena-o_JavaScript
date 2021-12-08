function duplicatedCountLetters(string){
    array = string.split("")

    letras = []

    for (let i = 0; i < array.length; i++){
        if (letras.indexOf(array[i]) == -1){
            letras.push(array[i])
        }
    }

    saida = ""

    letras.forEach(element => {
        let indice_inicial = string.indexOf(element)
        let indice_final = string.lastIndexOf(element)
        let quantidade = indice_final + 1 - indice_inicial

        if (quantidade > 9){

            inteiro = parseInt(quantidade / 9)
            resto = quantidade % 9

            for (let i = 0; i < inteiro; i++){
                saida += "9" + element
            }
            
            if (resto != 0)
                saida += resto + element
        }
        else {
            saida += quantidade + element
        }
    });    
    return saida    
}

let string = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAACCCDD"
console.log(duplicatedCountLetters(string))