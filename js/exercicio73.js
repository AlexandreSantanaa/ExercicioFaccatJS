function executarExercicio73(){
    alert("73) A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever: \na) Média de salário da população \nb) Média do número de filhos \nc) Maior salário dos habitantes \nd) Percentual de pessoas com salário menor que R$ 150,00 \nObs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”.")

    let mediaSalario=0, mediaFilho = 0, maior=0, menor150=0, quantidadeHabitantes = 0, filhos = 0, salario = 0, percentual=0

    do{
        salario = parseFloat(prompt('Digite seu salario'))
        filhos = parseInt(prompt("Digite quantos filhos você tem"))

        mediaSalario +=salario
        mediaFilho +=filhos

        if(salario>maior){
            maior=salario
        }
        
        if(salario<150){
            menor150++
        }

        quantidadeHabitantes++
        
    }while(salario>0)

    mediaSalario = mediaSalario/quantidadeHabitantes
    mediaFilho = mediaFilho/quantidadeHabitantes
    percentual = menor150/quantidadeHabitantes*100

    alert("A-media salario: R$"+mediaSalario+'\nB-media filhos: '+mediaFilho+"\nC-maior salario: R$"+maior+"\nD-percentual salario menor 150:" + percentual+"%")
}