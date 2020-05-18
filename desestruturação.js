const convidado={nome:'eneas', idade:16, endereço:{lagradouro:'av X', numero:32}}
const {nome,idade, endereço:{numero}}=convidado

const imprimir=({nome, idade})=>{
console.log(nome)
console.log(idade)
}
imprimir(convidado)