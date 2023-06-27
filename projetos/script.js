const allGames = [...document.querySelectorAll(".game")]
const container1 = document.querySelector("#container1")
const container2 = document.querySelector("#container2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")

const play = [...document.querySelectorAll(".gg")]

//Selecionar
allGames.map((e) => {
    e.addEventListener("click", (evt) => {
    const game = evt.target
    game.classList.toggle("destaque")
    })
})

//Remover
allGames.map((e) => {
    e.addEventListener("dblclick", (evt) => {
        const e = evt.target
        e.classList.remove("destaque")
    })
})
play.map((e) => {
    e.addEventListener("dblclick", (evt) => {
        const e = evt.target
        e.classList.remove("play")
    })
})


//Enviar
btn1.addEventListener("click", () => {
    const selecionado = [...document.querySelectorAll(".destaque")]
    selecionado.map((e)=>{
    container2.appendChild(e)
    })
})

//Voltar
btn2.addEventListener("click", () => {
    const voltar = [...document.querySelectorAll(".destaque")]
    voltar.map((e)=> {
        container1.appendChild(e)
    })
})

play.map((e) => {
    e.addEventListener("click", (evt) => {
    const play1 = evt.target
    play1.classList.toggle("play")
    })
})

btn3.addEventListener("click", () => {
    const checar = [...document.querySelectorAll(".play")]
    checar.map((e) => {
        alert(checar)
    })
})

