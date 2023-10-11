function executarExercicio82(){
    alert("82)  Ler  um  vetor  A  de  10  números.  Após,  ler  mais  um  número  e  guardar  em  uma  variável  X. Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após, imprimir o vetor M.")

    let vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x=0, vetorM = []

    x = parseFloat(prompt("Digite o um numero:"))

    for(let i = 0; i<vetorA.length; i++){
        vetorM[i] = vetorA[i]*x
        console.log(vetorA[i]+"*"+x+"="+vetorM[i])
    }
}