function pictureStudents(arrayBlack, arrayOrange){
    let resposta = true
    if(arrayOrange[0] > arrayBlack[0]){
        for(let i = 0; i < arrayOrange.length; i++){
            if(arrayOrange[i] < arrayBlack[i]){
                resposta = false
                break
            }
        }
    }else if(arrayBlack[0] > arrayOrange[0]){
        for(let i = 0; i < arrayBlack.length; i++){
            if(arrayBlack[i] < arrayOrange[i]){
                resposta = false
                break
            }
        }
    }

    return resposta
}

const arrayBlack = [150, 179, 149, 158, 154]
const arrayOrange = [162, 181, 151, 160, 170]

console.log(pictureStudents(arrayBlack, arrayOrange))