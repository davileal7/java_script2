//orientação a objetos

class Cor {
     constructor() {
          this.Cor = "Azul"
     }
}

const cor01 = new Cor();

console.log(cor01)


//com parametros
class Pessoa {
     constructor(par_nome){
          this.nome = par_nome
     }
}

let p1 = new Pessoa("Davi")
let p2 = new Pessoa("Naara")
let p3 = new Pessoa("Rafael")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)


class objeto {
     constructor (name, size) {
          this.name=name
          this.size=size
     }
}

const obj = new objeto("mesa","grande");

console.log(obj)
console.log(obj.name,obj.size)