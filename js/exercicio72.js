function executarExercicio72(){
    alert("2) Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:\n- o maior preço lido\n- a média aritmética dos preços dos produtos")

    let maior=0, menor=0,media=0, contador=quantidadeNumero

    for(let i = 1; i<=15; i++){
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