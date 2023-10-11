function executarExercicio31(){
    alert("31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.")

    let a = parseInt(prompt("Digite a medida do lado do triangulo"))
    let b = parseInt(prompt("Digite a medida do lado do triangulo"))
    let c = parseInt(prompt("Digite a medida do lado do triangulo"))

    if(a+b>c && a+c>b && c+b>a){ // 1 2 3 
        alert("é um triangulo")
    }else{
        alert("Não é um triangulo")
    }
}