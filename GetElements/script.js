//elementId -- QuerySector
const get1 = document.querySelector('#d1')
const get2 = document.querySelector('#d2')
const get3 = document.querySelector('#d3')
const get4 = document.querySelector('#d4')
const get5 = document.querySelector('#d5')
const get6 = document.querySelector('#d6')

const arrayElementos = [get1,get2,get3,get4,get5,get6]
console.log(arrayElementos)

//TagName  -- com Spread e Map
const colecaoHTML = [...document.getElementsByTagName('div')]
console.log(colecaoHTML)

colecaoHTML.map((e) => {
    console.log(e)
})

//className
const times = [...document.getElementsByClassName("curso")]
const times1 = [...document.getElementsByClassName("c1")]
const times2 = [...document.getElementsByClassName("c2")]
console.log(times)
console.log(times1)
console.log(times2)

times.map((e) => {
    e.classList.add("destaque")
} )

const queryAll = document.querySelectorAll("div > p")

console.log(queryAll)