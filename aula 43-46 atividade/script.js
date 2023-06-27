const caixaJogos = document.querySelector("#caixaJogos")
const btn = [...document.querySelectorAll(".jogos")]
const c1 = document.querySelector("#c1")
const jogos = ["Resident Evil", "Final Fantasy", "God of War", "Zelda", "Super Mario", "Metroid", "Fifa"]
const btnJogoSelecionado = document.getElementById("btnSelecionado")
const btnRemoveJogo = document.getElementById("btnRemove")

const btnAntes = document.getElementById("btnAntes")
const btnDepois = document.getElementById("btnDepois")
const nomeJogo = document.getElementById("nomeJogo")

let indice = 0

const criarJogo=(jogo) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" +indice)
    novoElemento.setAttribute("class", "jogo c1")
    novoElemento.innerHTML=jogo

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_jogo")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento


}
jogos.map((el, ind) => {
    const novoElemento=criarJogo(el)
    caixaJogos.appendChild(novoElemento)
    indice++

})

const radioSelecionado=() => {
    const todosRadios = [...document.querySelectorAll("input[type=radio")]
    const radioSelecionado = todosRadios.filter((val,ind,arr) => {
        return val.checked
    })
     return radioSelecionado[0]
}

btnJogoSelecionado.addEventListener("click", (evt) => {
    const rs=radioSelecionado()
    console.log(rs)
    if (rs!=undefined) {
        const jogoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Jogo selecionado" + jogoSelecionado)
    }
    else {
        alert("Selecione um jogo!")
    }
    
})

btnRemoveJogo.addEventListener("click", (evt) => {
    const rs=radioSelecionado()
    try {
        const jogoSelecionado = rs.parentNode.parentNode
        jogoSelecionado.remove()
    } catch(erro) {
        alert("Selecione um jogo para remover!")
    }
})

btnAntes.addEventListener("click", (evt)=> {
    const rs=radioSelecionado()
    if (nomeJogo.value!="") {
        const jogoSelecionado = rs.parentNode.parentNode
        const novoJogo=criarJogo(nomeJogo.value)
        caixaJogos.insertBefore(novoJogo, jogoSelecionado)
    }
    else {
        alert("Digite um jogo!")
    }
})

btnDepois.addEventListener("click", (evt)=> {
    const rs=radioSelecionado()
    if (nomeJogo.value!="") {
        const jogoSelecionado = rs.parentNode.parentNode
        const novoJogo=criarJogo(nomeJogo.value)
        caixaJogos.insertBefore(novoJogo, jogoSelecionado.nextSibling)
    }
    else {
        alert("Digite um jogo!")
    }
})

//parentNode
//childNodes[nodenumber]
//firstChild
//lastChild
//nextSibling
//previousSibling