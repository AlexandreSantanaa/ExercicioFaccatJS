function executarExercicio18(){
    alert("18)  Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). ")

    let anoAtual = parseInt(2023)
    let anoNascimento = parseInt(prompt("Digite o ano em que nasceu:"))

    let idade = anoAtual-anoNascimento

    if(idade>=16){
        alert("Pode votar:"+idade+" anos")
    }else{
        alert("Não pode votar:"+idade+" anos")
    }


}