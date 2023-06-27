//some - se encotrar pelo menos 1 elemento que etem equivalência

//1° elementos que vai interagir
const p_array1 =document.querySelector("#array1")
const btnVerificar =document.querySelector("#btnVerificar")
const resultado =document.querySelector("#resultado")

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 20]
p_array1.innerHTML= "[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt)=> {
    const retorno = elementos_array.some((e,i,a)=>{
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