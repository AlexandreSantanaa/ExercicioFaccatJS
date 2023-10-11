function executarExercicio09(){
   alert ("9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.") 

   let salarioAtual = parseFloat(prompt("Digite o salario do funcionario"))
   let reajuste = parseInt(prompt("Digite o percentual de reajuste"))
   
   let novoSalario = salarioAtual + (reajuste*salarioAtual)/100

   alert("O novo salrio é de " + novoSalario)
}