function executarExercicio83(){
    alert('83)  Faça  um  algoritmo  para  ler  20  números  e  armazenar  em  um  vetor.  Após  a  leitura  total  dos  20 números, o algoritmo deve escrever esses 20 números lidos na ordem inversa. ')

    let vetor01 = [], vetor02=[], tamanhoVetor = 4

    for(let i = 0; i<=tamanhoVetor; i++){
            vetor01[i] = parseFloat(prompt("Digite o " + (i+1) + "° numero:"))
            vetor02[tamanhoVetor-i] = vetor01[i]//5-0=5 4 3 2 1 0
    }
    for(let i = 0; i<vetor02.length; i++){
        console.log("vetor01["+ vetor01[i]+"] e vetor02["+ vetor02[i]+"]")
    }
}