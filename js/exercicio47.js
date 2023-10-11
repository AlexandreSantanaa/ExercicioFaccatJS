function executarExercicio47(){
    alert("47)  Acrescentar  uma  mensagem  de  'VALOR  INVÁLIDO'  no  exercício  [45]  caso  o  segundo  valor informado seja ZERO.")

    let valor01 = parseFloat(prompt("Digite um valor"))
    let valor02 = parseFloat(prompt("Digite outro valor"))//0

    while(valor02==0){
        alert("VALOR INVALIDO")
        valor02 = parseFloat(prompt("Digite outro valor")) //0 0 0 1
    }

    let divisao = valor01/valor02

    alert(valor01+"/"+valor02+"="+divisao)
}