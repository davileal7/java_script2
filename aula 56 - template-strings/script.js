//templates string

const caixa = document.querySelector("#caixa")

const carros = ["Polo", "Corsa", "Celta", "Lancer"]


let ul = `<ul>`
carros.map((el) => {
     ul+=`<li>${el}</li>`
})
ul+ `</ul>`

//const curso = "Javascript"
//const canal = "cfb Cursos"
//const frase = "Este é o curso de " + curso + " do canal " + canal + " teste."
//const frase = `Este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML=ul