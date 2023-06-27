/// parâmetros REST utilizando spread

//parte 1
function somaA(...valores) {
    return valores.length    
}
//retorna a quantidade
console.log(somaA(10,10,10,10))

//parte 2
function somaB(...valores) {
    let tamanho = valores.length
    let res = 0
    
    for (let i = 0; i < tamanho; i++) {
        res += valores[i];
    }
    return res
}
console.log(somaB(5,5,5))

//parte 3
function somaC(...valores) {
    let res = 0
    
    for (const v of valores) {
        res += v
    }
    return res
}
console.log(somaC(3,3,3))