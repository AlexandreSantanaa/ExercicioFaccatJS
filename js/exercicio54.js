function executarExercicio54(){
    alert("54)  Modifique o  exercício anterior para aceitar somente valores maiores  que 0 para N. Caso o valor informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.")

    let n=0
    do {
        n = parseInt(prompt("Digite um numero"))
    } while (n==0);

    for(let i=1; i<=n; i++){
        console.log(i)
    }
}