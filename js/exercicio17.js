function executarExercicio17(){
    alert("17)  Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média  aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.")

    let nota01 = parseFloat(prompt("Digite a nota01:"))
    let nota02 = parseFloat(prompt("Digite a nota02:"))

    let media = (nota01+nota02)/2

    if(media>=6){
        alert("Aluno aprovado com media "+media)
    }else{
        alert("Aluno reprovado com media "+media)
    }

}