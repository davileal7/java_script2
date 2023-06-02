/// MAP percorre todoo array, toda coleção
//recebe 3 parametros: elemento, posição, array

const jogos = [
    'Zelda','Metroid','Super Mario','Resident Evil'
]

jogos.map((elementos,posição) =>{
    console.log(`${elementos}na posição ${posição}`)
})

    let c = jogos.map((el01) =>{
    return "<div>"+el01+"</div>"
    })

console.log(c)


//let el03 = document.getElementsByTagName("div")
//el03=[...el03]
//el03.map((e,i) => {
//    console.log(e)
//})

//const elemento03 = document.getElementsByName("div")
//const valores = Array.prototype.map.call(el, ({innerHTML})=>innerHTML )
//console.log(valores)

const converterInt =(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)



//Percorrer o Array - QuerySector
const get1 = document.querySelector('#d1')
const get2 = document.querySelector('#d2')
const get3 = document.querySelector('#d3')
const get4 = document.querySelector('#d4')
const get5 = document.querySelector('#d5')
const get6 = document.querySelector('#d6')

const lista = [get1,get2,get3,get4,get5,get6]

lista.map((e) => {
    e.innerHTML='OI'
    console.log(e)
})

