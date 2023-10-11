function executarExercicio07(){
    alert("7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade  dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.")

    let anos = parseInt(prompt("Digite quantos anos você tem:"))
    let meses = parseInt(prompt("Digite quantos meses você tem:"))
    let dias = parseInt(prompt("Digite quantos dias você tem:"))

    let idade = anos*365 + meses*30 + dias
    
    //365*10=3650
    //30*5= 150
    //10

    alert("A pessoa tem " + idade + " dias de vida")
}
