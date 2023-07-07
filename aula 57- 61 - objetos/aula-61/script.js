//objetos literais

//new cria nova instancia, objto daquela classe e são inpependentes

// literais - classe/objeto unico

const Pessoa = {
     nome,
     idade,

     getNome: function () {
          return this.nome
     },
     getIdade: function () {
          return this.idade
     },
     setNome: function (nome) {
          this.nome = nome
     },
     setIdade: function (idade) {
          this.idade = idade
     }
}

let pessoas = []

const btnAdd = document.querySelector("#btn_add")
const res = document.querySelector(".res")

function addPessoas() {
     res.innerHTML=""
     pessoas.map((el) =>{
          const div = document.createElement("div")
          div.setAttribute("class","pessoa")
          pessoas.innerHTML=`Nome: ${el.getNome(nome)} <br/> Idade: ${el.getIdade(idade)}`
          res.appendChild(div)
     })
}

btnAdd.addEventListener("click", (evt) => {
     const nome = document.querySelector("#nome")
     const idade = document.querySelector("#idade")
     const p = new Pessoa(nome.value, idade.value)
     pessoas.push(p)
     nome.value=""
     idade.value=""
     nome.focus()
     addPessoas()
})