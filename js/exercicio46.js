function executarExercicio46(){
    alert("46)  Acrescentar  uma  mensagem  de  'VALOR  INVÁLIDO'  no  exercício  [44]  caso  o  segundo  valor informado seja ZERO")
   

    let valor01 = parseFloat(prompt("Digite o primeiro valor"))
    let valor02=0
    do{
        valor02=parseFloat(prompt("Digite o segundo numero"))
        if(valor02==0){
            alert("VALOR INVALIDO")
        }
    }while(valor02==0)

    let divisao = valor01/valor02

    alert(valor01+"/"+valor02+"="+divisao)
}
