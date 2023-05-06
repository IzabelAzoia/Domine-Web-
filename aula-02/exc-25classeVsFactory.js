class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Izabel')
p2.falar()

///function construtora

function Pessoas(nome) {
     this.nome = nome
     this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
     }
}
const p3 = new Pessoas('Azoia')
p3.falar()