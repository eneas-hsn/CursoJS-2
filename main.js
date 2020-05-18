class listaConvidados{
    constructor(){
        this.convidados=[]
    }
    adicionar(nome,idade,cpf){
        this.convidados.push({nome:nome,idade:idade,cpf:cpf})
        var nome=document.getElementById('nome').value
    var idade=document.getElementById('idade').value
    var cpf=document.getElementById('cpf').value
    }
    listarConvidados(){
    console.log(this.convidados)
}
}
var listaConv=new listaConvidados()
document.getElementById('novoConvidado').onclick=function () {
    listaConv.adicionar(nome,idade,cpf)
}
document.getElementById('listar').onclick=function () {
    listaConv.listarConvidados()
}