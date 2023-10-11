function executarExercicio23(){
    alert("23)  Para  o  enunciado  a  seguir  foi  elaborado  um  algoritmo  em  Português  Estruturado  que  contém erros, identifique os erros no algoritmo apresentado abaixo: Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo masculino:  peso ideal = (72.7 * altura) - 58 - para sexo feminino:  peso ideal = (62.1 * altura) - 44.7")

    let nome = prompt("Digite seu nome")
    let sexo = prompt(nome + " digite seu sexo: \nF- feminino \nM-masculino")
    let altura = parseFloat(prompt(nome + " digite sua altura em metros"))
    let pesoIdeal=0

    if(sexo == "m" || sexo == "M"){
        pesoIdeal = (72.7 * altura) - 58
        
    }else{
        pesoIdeal = (62.1 * altura) - 44.7
    }
    alert(nome + " seu peso ideal é:" + pesoIdeal + "kgs")
 
}