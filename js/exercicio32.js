function executarExercicio32(){
    alert("32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.")

    let nomeTime01 = prompt("digite um nome")
    let nomeTime02 = prompt("digite outro nome")

    let golsTime01 = prompt("Digite a quantidade de gols do time " + nomeTime01)
    let golsTime02 = prompt("Digite a quantidade de gols do time " + nomeTime02)

    let vencedor = (golsTime01>golsTime02)? nomeTime01+" ganhou de " + golsTime01 + "X" + golsTime02 :  (golsTime01<golsTime02)? nomeTime02+" ganhou de " + golsTime02 + "X" + golsTime01 : " empate " + golsTime01 + "X" + golsTime02

    alert(vencedor)
}