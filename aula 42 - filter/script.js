const filtroMaior18=(valor) => {
    if (valor >= 18) {
        return valor
    }
}

const idades = [20,25,30,40,50,10,7]

const maior = idades.filter(function (val) {
    if (val >= 18) {
        return val
    }
})
   
const menor = idades.filter((val,ind,arr) => {
    if (val <= 15) {
        return val
    }
})

console.log(idades)
console.log(maior)
console.log(menor)