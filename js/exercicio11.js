function executarExercicio11(){
    alert("11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.")

    let salarioFixo = parseFloat(prompt("Digite o salario fixo:"))
    let comissaoFixa = parseFloat(prompt("Digite a comissao por carro:"))
    let quantidadeCarro = parseFloat(prompt("Digite a quantidade de carros:"))

    let salarioFinal = salarioFixo + (comissaoFixa * quantidadeCarro) + (comissaoFixa * quantidadeCarro*0.05)
  
    alert("O salario total é de:"+salarioFinal)
}