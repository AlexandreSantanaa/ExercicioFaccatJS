function executarExercicio84(){
    alert("84) Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois vetores  A  e  B  (de  tamanho  N  cada  um)  e  depois  armazenar  em  um  terceiro  vetor  Soma  a  soma  dos elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma. ")

    let n = parseFloat(prompt("Digite o tamanho do vetor:"))
    let vetorA=[], vetorB=[], vetorSoma=[]

    for(let i = 0; i<n; i++){
        vetorA[i] = parseFloat(prompt("Digite o " + (i+1) + "° numero do vetor A:"))
        vetorB[i] = parseFloat(prompt("Digite o " + (i+1) + "° numero do vetor B:"))
        vetorSoma[i] = vetorA[i]+vetorB[i]
        console.log("vetorA["+vetorA[i]+"]"+" + "+"vetorB["+vetorB[i]+"] = " + "vetorSoma["+vetorSoma[i]+"]")
    }
}