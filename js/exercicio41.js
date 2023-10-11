function executarExercicio41(){
    alert("41)  Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3  verificações  e  a  média  dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: ")

    let nota01 = parseFloat(prompt("Digite a nota 01:"))
    let nota02 = parseFloat(prompt("Digite a nota 02:"))
    let nota03 = parseFloat(prompt("Digite a nota 03:"))
    let mediaExercicios = parseFloat(prompt("Digite a media dos exercicios"))

    let media = (nota01+nota02*2+nota03*3+mediaExercicios)/7 

    let conceito = (media>=9)?"A":(media>=7.5 && media<9)?"B":(media>=6 && media<7.5)?"C":"D"

    alert("A media e conceito do aluno foram " + media +" "+conceito)

}