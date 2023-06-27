const caixa =document.querySelector("#caixa")

let cores = ["Azul","Verde","Vermelho"]
let cursos = ["Html", "Css", "Js",cores]

//cursos[0] = "C++"

cursos.push("React") //add no fim
cursos.unshift("React") //add no inicio
cursos.shift() //tira no inicio

console.log(cursos[3][1])

cursos.map((e) => {
     let p=document.createElement("p")
     p.innerHTML=e
     caixa.appendChild(p)
})
