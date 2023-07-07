//criar a classe através de uma função

function Pessoa (par_nome, par_idade){
     this.nome = par_nome,
     this.idade = par_idade,
          
     //métodos
     this.getNome=function(){
          return this.nome
     },
     this.getIdade=function(){
          return this.idade
     },
     //altera propriedades da nossa classe
     this.setNome=function(nome){
          this.nome=nome
     },
     this.setTipo=function(idade){
          this.idade=idade
     },

     this.info=function(){
          console.log(`Nome: ${this.nome}`)
          console.log(`Idade: ${this.idade}`)
          console.log("---------------------")
     }
}

let pessoas =[]

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa=()=> {
     res.innerHTML=""
     pessoas.map((p)=>{
          const div=document.createElement("div")
          div.setAttribute("class", "pessoa")
          div.innerHTML= `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
          res.appendChild(div)
     })
}

//criar nova pessoa
btn_add.addEventListener("click", (evt) => {
     const nome = document.querySelector("#nome")
     const idade = document.querySelector("#idade")
     const p = new Pessoa(nome.value, idade.value)
     pessoas.push(p)
     nome.value=""
     idade.value=""
     nome.focus()
     addPessoa()
})