const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")

const todosTimes = [...document.querySelectorAll(".time")]

todosTimes.map((el)=>{
    el.addEventListener("click", (evt) =>{
        const time = evt.target
        //toggle - verifica se tem o elemento se tem remove senão adiciona.
        time.classList.toggle("selecionado")
    })
})

todosTimes.map((elemento)=>{
    elemento.addEventListener("dblclick", (evt) =>{
        const el = evt.target
        el.classList.remove("selecionado")

    })
})


btn.addEventListener("click", ()=>{
    const times_Selecionados=[...document.querySelectorAll(".selecionado")]
    const NAOselecionados=[...document.querySelectorAll(".time:not(.selecionado)")]
    times_Selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    NAOselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})


//ondblclick

//const msg=() => {
//    alert("clicou")
//}

//c1.addEventListener("click",(evt)=>{
//    const el = evt.target
//    el.classList.add("destaque")
//})

