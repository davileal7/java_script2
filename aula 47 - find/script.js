//elemento está no array

//1° elementos que vai interagir
const p_array1 =document.querySelector("#array1")
const p_array2 =document.querySelector("#array2")
const txt_pesquisar =document.querySelector("#txt_pesquisar")
const btnPesquisar =document.querySelector("#btnPesquisar")
const resultado =document.querySelector("#resultado")

const elementos_array = [10, 5, 8, 2, 40, 20]
p_array1.innerHTML= "[" + elementos_array + "]"

const elementos_string = ["Azul", "Verde", "Vermelho"]
p_array2.innerHTML = "[" + elementos_string + "]"

btnPesquisar.addEventListener("click",(evt)=> {
    resultado.innerHTML="valor não encontrado"
    
    const ret = elementos_string.find((e, i) =>{
        if (e.toLocaleUpperCase()==txt_pesquisar.value.toLocaleUpperCase()) {
            resultado.innerHTML="valor pesquisado " + e + " na posição " + i
            return true
        }

    })
})