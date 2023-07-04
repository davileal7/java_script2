//coleção set
// não permite duplicadas

const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica boa", "musica ruim", "musica clássica"])

musicas.add("rock")
musicas.add("rock")
musicas.add("rock 10")

musicas.delete("musica clássica")

console.log(musicas)

musicas.forEach((el) => {
     caixa.innerHTML += el + "<br/>"
})

for (const m of musicas) {
     caixa.innerHTML += m + "<br/>"
}