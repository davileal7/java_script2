let n1 = [1,2,3,4]
let n2 = [10,20,30,40]
let n3 = [100,200,300,400]

let n4 = [...n1,...n2]

console.log("n4: " + n4)
console.log(typeof (n4))

const jogador1 ={nome:"Cloud", energia: 100, ataque: 60, magia: 70}
const jogador2 ={nome:"Link", energia: 100, ataque: 40, velociade: 45}

const jogador4 ={...jogador1,...jogador2}

console.log(jogador4)

const soma = (v1,v2,v3) => {
    return v1 +v2 + v3
}

console.log(soma(2,2,2))


const objs = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

//objs2.forEach(element => {
//    element.innerHTML = "ZERADO"
//});

console.log(objs)
console.log(objs2)