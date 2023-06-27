//stopPropagation

const caixa1 = document.querySelector("#caixa1")
const btn1 = document.querySelector("#c1")
const times = [...document.querySelectorAll(".time")]

caixa1.addEventListener("click", (evt) => {
    console.log('clicou')
    
})

times.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation()
    })
})

