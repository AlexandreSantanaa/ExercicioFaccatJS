function executarExercicio27(){
    alert("27) Ler um valor e escrever se é positivo, negativo ou zero. ")

    let x = parseInt(prompt("Digite um numero:"))

    let z = (x==0)? "zero" : (x<0) ? "negativo" : "postivo"

    alert(z)
}