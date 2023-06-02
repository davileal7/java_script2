// Função GERADORA

function* cores() {
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas() {
    const nome=yield 'Qual o seu nome'
    const time=yield 'Qual o seu time'
    return "Seu nome é " + nome + ', seu time é '+ time
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Davi').value)
console.log(itp.next('Corinthians').value)

function* contador() {
    let i=0
    while (true) {
        yield i++
    }
}

const ita = contador()
console.log(ita.next().value)
console.log(ita.next().value)
console.log(ita.next().value)