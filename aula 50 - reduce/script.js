//some - se encotrar pelo menos 1 elemento que etem equivalência

//1° elementos que vai interagir
const p_array1 =document.querySelector("#array1")
const btnReduzir =document.querySelector("#btnReduzir")
const resultado =document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []

p_array1.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click",(evt)=> {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=> {
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
    })
    resultado.innerHTML+= "<br/> Anterior: " + ant 
    resultado.innerHTML+= "<br/> Atual: " + atu
})
    
    
