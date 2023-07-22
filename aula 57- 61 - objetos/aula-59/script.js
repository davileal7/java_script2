//objetos

class Pessoa {
     constructor(par_nome, par_idade){
          this.nome = par_nome
          this.idade = par_idade 
     }
     //métodos

     //altera propriedades da nossa classe
     getNome(){
          return this.nome
     }
     getIdade(){
          return this.idade
     }

     //altera propriedades da nossa classe
     setNome(nome){
          this.nome=nome
     }
     setIdade(idade){
          this.idade=idade
     }
    
     info(){
          console.log(`Nome: ${this.nome}`)
          console.log(`Idade: ${this.idade}`)
          console.log("---------------------")
     }
}

let pessoas =[]

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

//criando nova 'div' '.res'
const addPessoa=()=> {
     res.innerHTML=""
     pessoas.map((el)=>{
          const div=document.createElement("div")
          div.setAttribute("class", "pessoa")
          div.innerHTML= `Nome: ${el.getNome()}<br/>Idade: ${el.getIdade()}`
          res.appendChild(div)
     })
}

//criar nova pessoa
btn_add.addEventListener("click", (evt) => {
     const nome = document.querySelector("#nome")
     const idade = document.querySelector("#idade")
     const newPessoa = new Pessoa(nome.value, idade.value)
     //adcionando ao array de *pessoas
     pessoas.push(newPessoa)
     nome.value=""
     idade.value=""
     nome.focus()
     addPessoa()
})


