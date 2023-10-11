function executarExercicio77(){
    alert("Dado o seguinte vetor: \n1 2 3 4 5 6 7 8 \nV 5 1 4 2 7 8 3 6 \nQual será o conteúdo do vetor V depois de executado o algoritmo abaixo? \nPara i de 8 até 5 passo -1 Faça \naux    v [i] \nv [i]    v [8 - i + 1] \nv [8 - i + 1]    aux \nFim_Para \nv [3]    v [1] \nv [v [3]]    v [v [2]]")

    let v = [5, 1, 4, 2, 7, 8, 3, 6]

    for (let i = 8; i >= 5; i--) {
        let aux = v[i]
        v[i] = v[8-i+1]
        v[8-i+1] = aux
    }
    let temp = v[3];
    v[3] = v[1];
    v[temp] = v[v[2]];


    for(let i = 0; i<v.length; i++){
        console.log("v["+i+"]"+v[i])
    }
    
}