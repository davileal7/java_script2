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

//selecionar apenas 1
const tirarSelecao =()=> {
    const jogosEscolhidos=[...document.querySelectorAll(".selecionado")]
    jogosEscolhidos.map((el)=>{
        el.classList.remove("selecionado")
    })
} 

const criarJogo=(jogo) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" +indice)
    novoElemento.setAttribute("class", "jogo c1")
    novoElemento.innerHTML=jogo
    
    //selecionar
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento

 

    

}
jogos.map((el, ind) => {
    const novoElemento=criarJogo(el)
    caixaJogos.appendChild(novoElemento)
    indice++
})

const jogoSelecionado=() => {
    const jogosEscolhidos = [...document.querySelectorAll(".selecionado")]
     return jogosEscolhidos[0]
}

btnJogoSelecionado.addEventListener("click", (evt) => {
    try {
        alert("Jogo selecionado: " + jogoSelecionado().innerHTML) 
    }
    catch(ex) {
        alert("Selecione um jogo!")
    }
})

btnRemoveJogo.addEventListener("click", (evt) => {
    try {
        alert(jogoSelecionado().innerHTML + " removido")
        jogoSelecionado().remove()
    } catch(erro) {
        alert("Selecione um jogo para remover!")
    }
})

btnAntes.addEventListener("click", (evt)=> {
    if (nomeJogo.value!="") {
        const novoJogo=criarJogo(nomeJogo.value)
        caixaJogos.insertBefore(novoJogo, jogoSelecionado())
    }
    else {
        alert("Digite um jogo!")
    }
})

btnDepois.addEventListener("click", (evt)=> {
    if (nomeJogo.value!="") {
        const novoJogo=criarJogo(nomeJogo.value)
        caixaJogos.insertBefore(novoJogo, jogoSelecionado().nextSibling)
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