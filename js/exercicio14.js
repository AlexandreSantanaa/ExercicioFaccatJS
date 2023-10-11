function executarExercicio14(){
    alert("14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! ")

    let valor = parseInt(prompt("Digite um numero"))

    if (valor>10){
        alert(valor+ " é maior que 10")
    }else if(valor ==10){
        alert(valor+ " é 10")
    }
    else{
        alert(valor+ " é menor que 10")
    }
}
