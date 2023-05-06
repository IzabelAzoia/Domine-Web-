const valor = 'Global'
function minhaFuncao() {
     console.log(valor)
}
function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

//Clousure é o escopo criado quando uma funcao é declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas á funcao
//contexto lexico em acao!
const x = 'Global'
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhasFuncao = fora()
console.log(minhasFuncao())