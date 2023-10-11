function executarExercicio20(){
    alert("20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.")

    let valor01 = parseInt(prompt("Digite um valor"))
    let valor02 = parseInt(prompt("Digite outro valor"))

    if(valor01>valor02){
        alert(valor02+"-"+valor01)
    }else if(valor01==valor02){
        alert(valor02+"-"+valor01)
    }else{
        alert(valor01+"-"+valor02)
    }
}