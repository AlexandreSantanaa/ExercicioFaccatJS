function executarExercicio81(){
    alert("81)  O  mesmo  exercício  anterior,  mas  agora  deve  escrever  o  menor  elemento  do  vetor  e  a  respectiva posição dele nesse vetor. ")

    let q =[], tamanhoQ = 20, menor = 0

    for (let i = 0; i < tamanhoQ; i++) {
        q[i] = parseInt(prompt("Digite o " + (i+1) + "° numero:"))
        
        if(i == 0){
            menor = q[i]
        }

        if(q[i]<menor){
            menor = q[i]
        }
    }

    for(let i = 0; i<q.length; i++){
        if(q[i]==menor){
            alert("q["+i+"]")
            break
        }
    }
}