function searchNumbers(array, targetSum) {
    const arrayRes = []
    for (let i = 0; i < array.length; i++) {
        let numAtual = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (numAtual + array[j] == targetSum) {
                arrayRes.push(numAtual, array[j])
            }
        }
    }
    return arrayRes
}

const array = [3, 5, -4, 8, 11, 1, 0, 6]
const targetSum = 10
console.log(searchNumbers(array, targetSum))



