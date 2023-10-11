function executarExercicio60(){
    alert("60)  Ler  10  valores  e  escrever  quantos  desses  valores  lidos  estão  no  intervalo  [10,20]  (inlcuindo  os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.")

    let contador=1, numero=0, estaoIntervalo=0, naoEstaoIntervalo=0
    do {
        numero = parseInt(prompt("Digite um numero"))
        if(numero>=10 && numero<=20){
            estaoIntervalo++
        }else{
            naoEstaoIntervalo++
        }
        contador++
    } while (contador<=10);
    alert("Estão no intervalo: "+estaoIntervalo+"\nnão estão no intervalo: " + naoEstaoIntervalo)
}