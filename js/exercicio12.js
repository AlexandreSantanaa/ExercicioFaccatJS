function executarExercicio12(){
    alert("12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):")

    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit"))
    let temperaturaCelcius = ((temperaturaFahrenheit-32)/9)*5
    
    alert("A temperatura em graus celcius é de:"+temperaturaCelcius)
}