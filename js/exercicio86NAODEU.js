function executarExercicio86(){
    alert("86)  Faça  um  algoritmo  para  ler  10  números  e  armazenar  em  um  vetor.  Após  isto,  o  algoritmo  deve ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado.")

    let vetor=[]

    for(let i = 0; i<=9; i++){
        vetor[i]=parseFloat(prompt("Digite o " + (i+1) + "° numero:"))
    }

    console.log(vetor.sort())
}