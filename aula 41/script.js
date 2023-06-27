const caixa1 = document.querySelector("#caixa1")
const btn =[...document.querySelectorAll(".time")]
const c1 = document.querySelector("#c1")

const times = ["Corinthians", "Flamengo", "Palmeiras", "Vasco", "Fluminense", "Cruzeiro"]

times.map((el, qt )=> {
    const novo_elemento = document.createElement("div")
    novo_elemento.setAttribute("id","c" + qt)
    novo_elemento.setAttribute("class","time t1")
    novo_elemento.innerHTML = el
        
    const lixeira = document.createElement("img")
    lixeira.setAttribute("src","./img/lixeira.png")
    lixeira.setAttribute("class","lixeira")
    novo_elemento.addEventListener("click",(evt)=> {
        caixa1.removeChild(evt.target.parentNode)
    })

    novo_elemento.appendChild(lixeira)
    caixa1.appendChild(novo_elemento)
})

