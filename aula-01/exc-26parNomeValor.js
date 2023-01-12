//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto lêxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares / valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)