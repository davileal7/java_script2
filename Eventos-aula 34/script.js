const c1 = document.querySelector('#c1')
const times = [...document.querySelectorAll(".curso")]


times.map((elemento)=>{
    elemento.addEventListener("click", (evt) =>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " clicado")
    })
})

times.map((elemento)=>{
    elemento.addEventListener("dblclick", (evt) =>{
        const el = evt.target
        el.classList.remove("destaque")

    })
})



//ondblclick

//const msg=() => {
//    alert("clicou")
//}

//c1.addEventListener("click",(evt)=>{
//    const el = evt.target
//    el.classList.add("destaque")
//})

