function executarExercicio45(){
    alert("45)  Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura WHILE). ")

    let valor01 = parseFloat(prompt("Digite um valor"))
    let valor02 = parseFloat(prompt("Digite outro valor"))//0

    while(valor02==0){
        valor02 = parseFloat(prompt("Digite outro valor")) //0 0 0 1
    }

    let divisao = valor01/valor02

    alert(valor01+"/"+valor02+"="+divisao)
}