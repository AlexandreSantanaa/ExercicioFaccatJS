function executarExercicio88(){
    alert("88) Faça  um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número qualquer e verificar se esse número existe no vetor ou não. Se existir, o algoritmo deve gerar um novo vetor sem esse número. (Considere que não haverão números repetidos no vetor)")

    let vetor=[], novoValor = 0, novoVetor = []

    for(let i=0; i<=4; i++){
        vetor[i] = parseFloat(prompt("Digite o " + (i+1) + "°numero:"))
    }

    novoValor = parseFloat(prompt("Digite outro valor"))
    
    // Verificar se o novoValor existe no vetor e criar um novo vetor sem ele
    for(let i=0; i<vetor.length; i++){
        if(novoValor !== vetor[i]){
            novoVetor.push(vetor[i]);
        }
    }

    console.log("Vetor original:", vetor);
    console.log("Novo vetor sem o número " + novoValor + ":", novoVetor);
    console.log("Vetor original:", vetor);
}
