function executarExercicio71(){
    alert("71) Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de ler  todos  os  números  o  algoritmo  deve  apresentar  na  tela  o  maior  dos  números  lidos  e  a  média  dos números lidos. ")

    let quantidadeNumero = parseInt(prompt("Digite a quantidade de valores"))
    let maior=0, menor=0,media=0, contador=quantidadeNumero

    while(contador>0){
        let numero = parseFloat(prompt("Digite um numero:"))

        if(numero>maior){
            maior = numero
        }
        media +=numero
        contador--
    }

    media=media/quantidadeNumero
    alert("media = " + media + "\nmaior = " + maior)
}