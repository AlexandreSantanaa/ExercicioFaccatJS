function executarExercicio44(){
    alert("44)  Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).")

    let valor01=0, valor02=0

    valor01=parseFloat(prompt("Digite o primeiro numero"))

    do{
        valor02=parseFloat(prompt("Digite o segundo numero"))
    }while(valor02==0)

    let divisao = valor01/valor02

    alert(valor01+"/"+valor02+"="+divisao)
}