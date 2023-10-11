function executarExercicio79(){
    alert("79) Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média da  turma  e  contar  quantos  alunos  obtiveram  nota  acima  desta  média  calculada.  Escrever  a  média  da turma e o resultado da contagem.")

    let nota = []
    let soma=0, contadorMedia=0
    for(let i = 0; i<=20; i++){
        nota[i] = parseFloat(prompt("Digite a nota " + (i+1)))
        soma = soma + nota[i]
    }
    let media = soma/nota.length

    for(let i = 0; i<=nota.length; i++){
        if(nota[i]>=media){
            contadorMedia++
        }
    }
    alert("A media é: "+media+" e "+contadorMedia+" alunos tiraram uma nota maior ou igual a media")


}