//EVERY - compara todos elementos e retorna true se todos estiverem a uma regra (ex e >= 18 .

//1° elementos que vai interagir
const p_array1 =document.querySelector("#array1")
const btnVerificar =document.querySelector("#btnVerificar")
const resultado =document.querySelector("#resultado")

const elementos_array = [21, 22, 19, 20, 132, 20, 22]
p_array1.innerHTML= "[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt)=> {
    const retorno = elementos_array.every((e,i,a)=>{
        if (e < 18) {
            resultado.innerHTML="Array não conforme na posição " + i
        }
        return e >= 18
    })
    if (retorno==true) {
        resultado.innerHTML="Ok"
    } 
    //console.log(retorno)
    

})