function executarExercicio62(){
    alert("62) Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e escrever a média aritmética dessas notas lidas.")

    let numeroAlunos = parseInt(prompt("Digite quantos alunos tem na turma"))
    let contador=0, notas=0, media=0

    while(contador<=numeroAlunos){
        notas = parseFloat(prompt("Digite a nota do aluno " + contador))
        contador++ 

        media+=notas
    }

    media = media/contador

    alert("A media é:" + media)
}