function executarExercicio06(){
    alert("6) Escreva um algoritmo para ler as dimensões de um retângulo \n (base e altura), calcular e escrever a  área e o perimetro do retângulo")

    let base = parseInt(prompt("Digite o valor da base"))
    let altura = parseInt(prompt("Digite o valor da altura"))

    let area = base*altura
    let perimetro = base+base+altura+altura

    alert("A area do retangulo é de: " + area)
    alert("O perimetro do retangulo é de: " + perimetro)  
}