const v1 = document.querySelector("#v1")
const v2 = document.querySelector("#v2")
const res = document.querySelector("#res")
const limpar = document.querySelector("#limpar")

const mais = document.querySelector("#mais")
const menos = document.querySelector("#menos")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")

mais.addEventListener("click",() => {
     const n1 = Number(v1.value)
     const n2 = Number(v2.value)
     const s = n1 + n2
     res.innerHTML = s
})

menos.addEventListener("click",function () {
     const n1 = Number(v1.value)
     const n2 = Number(v2.value)
     const s = n1 - n2
     res.innerHTML = s
})

divisao.addEventListener("click",() => {
     const n1 = Number(v1.value)
     const n2 = Number(v2.value)
     const s = n1 / n2
     res.innerHTML = s
})

multiplicacao.addEventListener("click",() => {
     const n1 = Number(v1.value)
     const n2 = Number(v2.value)
     const s = n1 * n2
     res.innerHTML = s
})

limpar.addEventListener("click",function () {
     res.innerHTML=""
     
})