function executarExercicio64(){
    alert('64) Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada')

    let numero=0, soma=0

    for(let i=0; i<=9; i++){
        numero = parseFloat(prompt("Digite um numero"))

        if(numero<40){
            soma+=numero
        }
    }

    alert("Soma = " + soma)
}