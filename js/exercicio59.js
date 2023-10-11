function executarExercicio59(){
    alert("59) Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.")

    let contador = 1, negativo=0, positivo=0
    while(contador<=10){
        let numero = parseInt(prompt("Digite um numero"))
        if(numero<0){
            negativo++
        }else{
            positivo++
        }
        contador++
    }
    alert("positivo="+positivo +'\nnegativo='+negativo)
}