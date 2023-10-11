function executarExercicio61(){
    alert("61) Ler 10 valores, calcular e escrever a média aritmética desses valores lidos. ")

    let contador=0, numero=0, media=0
    while(contador<10){
        numero = parseFloat(prompt("Digite um numero:"))
        media = numero + media
        contador++
    }
    
    media = media/contador
    alert("A media é:" + media)
}