function executarExercicio80(){
    alert("80)  Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor.")

    let q =[], tamanhoQ = 20, maior = 0

    for (let i = 0; i < tamanhoQ; i++) {
        q[i] = parseInt(prompt("Digite o " + (i+1) + "° numero:"))
        while(q[i]<0){
            q[i] = parseInt(prompt("Digite o " + (i+1) + "° numero, novamente:"))
        }
        if(q[i]>maior){
            maior = q[i]
        }
    }

    for(let i = 0; i<q.length; i++){
        if(q[i]==maior){
            alert("q["+i+"]")
            break
        }
    }
}