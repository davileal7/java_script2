function somaA() {
   let n1 = 10;
   let n2 = 35;
   let soma = n1 +n2;
   console.log(soma)
}

somaA();

function mudarDiv() {
    let d1 = document.querySelector("#d1")
    let d2 = document.querySelector("#d2")
    let d3 = document.querySelector("#d3")

    d1.innerHTML = 'Vasco'
    d2.innerHTML = 'Santos'
    d3.innerHTML = 'Bahia'
}

// parte 2 
function jogo() {
    return "Zelda"
}
console.log(jogo())

function somaB() {
    let num = 10;
    let num2 = 2;
    let res = num * num2
    return res
}

let resultado = somaB();
console.log(resultado)

//parte 3 - PARAMETRO

function somaC(a, b) {
    return console.log(a + b);   
}
somaC(5,5)

let valor = 0

function add(v) {
    return valor = v
}

valor = add(20)
console.log(valor)

valor = add(50)
console.log(valor)