//objetos

class Carro {
     canal = "You Tube"
     constructor(par_nome, tipo){
          this.canal = "CFB Cursos"
          this.nome = par_nome
          if (tipo == 1) {
               this.tipo="Esportivo"
               this.vel=300
          } else if (tipo == 2) {
               this.tipo = "Utilitário"
               this.vel = 100
          } else if (tipo == 3) {
               this.tipo = "Passeio"
               this.vel = 80
          } else if (tipo == 4) {
               this.tipo = "Policia"
               this.vel = 160
          }
     }
     //métodos
     getNome(){
          return this.nome
     }
     getTipo(){
          return this.tipo
     }
     getVel(){
          return this.vel
     }
     getInfo(){
          return [this.nome, this.tipo, this.vel]
     }
     //altera propriedades da nossa classe
     setNome(nome){
          this.nome=nome
     }
     setTipo(tipo){
          this.tipo=tipo
     }
     setVel(vel){
          this.vel=vel
     }
     info(){
          console.log(`Nome: ${this.nome}`)
          console.log(`Tipo: ${this.tipo}`)
          console.log(`V.Max: ${this.vel}`)
          console.log(`Canal: ${this.canal}`)
          console.log("---------------------")
     }
}

let c1 = new Carro("Ferrari", 1)
let c2 = new Carro("Van Escolar", 2)
let c3 = new Carro("Gol", 3)
let c4 = new Carro("Prf", 4)

//console.log(c1.nome)
//console.log(c1.tipo)
//console.log(c1.vel)

c1.setNome("Mustang")

c1.info()
//c2.info()

//console.log(c1.getInfo())