//coleção Map

const caixa = document.querySelector("#caixa")

//chave/valor
let mapa =new Map()

mapa.set("Curso","html")
mapa.set(10,"css")
mapa.set(1,100)
mapa.set("Roupa",20)

console.log(mapa)

mapa.delete(10)

let pesquisa = 10

if (mapa.has(pesquisa)) {
     caixa.innerHTML="Existe a chave " + pesquisa + " com o valor: "+ mapa.get(pesquisa)
     caixa.innerHTML+="<br/> O tamanho da coleção é " + mapa.size
}else {
     caixa.innerHTML="Não esxiste"
}

mapa.forEach((el)=>{
     console.log(el)
})

//caixa.innerHTML=mapa.get("Curso")