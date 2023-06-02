const soma=(n1,n2) => {
    return n1 + n2
}
console.log(soma(6,6))

// função dentro de outra função
const somaB = (...valores) => {
    const somar = val => {
        let res=0
        for (v of val) {
            res+=v
            return res
        }
    }
    return somar(valores)
}

console.log(somaB(7,7))