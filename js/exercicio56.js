function executarExercicio56(){
    alert("56) Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor ido")

    let n = parseInt(prompt('Digite um numero'))

    for(let i = 1; i<=10; i++){
        console.log(n+"*"+i+"="+n*i)
    }
}