function executarExercicio19(){
    alert("19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.")

    let valor01=parseInt(prompt("Digite um valor"))
    let valor02=parseInt(prompt("Digite outro valor"))

    if(valor01>valor02){
        alert(valor01+">"+valor02)
    }else if(valor01==valor02){
        alert(valor02+"="+valor01)
    }
    else{
        alert(valor02+">"+valor01)
    }
}