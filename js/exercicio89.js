function executarExercicio89(){
    alert("89)  Faça  um  algoritmo  para  ler  dois  vetores  V1  e  V2  de  15  números  cada.  Calcular  e  escrever  a quantidade de vezes que V1 e V2 possuem os mesmos números e nas mesmas posições.")

    let v1=[],v2=[], tamanhoVetor = 15, mesmoValor=0

    for(let i = 0; i<tamanhoVetor; i++){
        v1[i] = parseFloat(prompt("Digite o " +(i+1)+"° numero do vetor 01:"))
        v2[i] = parseFloat(prompt("Digite o " +(i+1)+"° numero do vetor 02:"))
    }

    for(let i = 0; i<tamanhoVetor; i++){
        mesmoValor += (v1[i]==v2[i]) ? 1 : 0
    }

    alert("v1 e v2 possuem os mesmos números e nas mesmas posições " + mesmoValor + " vezes")

    
}