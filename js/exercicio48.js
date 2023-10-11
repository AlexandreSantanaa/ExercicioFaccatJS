function executarExercicio48(){
    alert("48)  Escreva  um  algoritmo  para  ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno,  calcule  e  imprima  a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota")

    let nota01 = parseFloat(prompt("Digite a primeira nota"))
    let nota02 = parseFloat(prompt("Digite a segunda nota"))

    while(nota01<0 || nota01>10){
        nota01 = parseFloat(prompt("Digite a primeira nota novamente"))
    }

    while(nota02<0 || nota02>10){
        nota02 = parseFloat(prompt("Digite a segunda nota novamente"))
    }

    let media = (nota01+nota02)/2

    alert("A media é:"+ media)
}