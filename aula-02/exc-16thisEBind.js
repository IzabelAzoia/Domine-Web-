const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function humano() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new humano

function humano2() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new humano2