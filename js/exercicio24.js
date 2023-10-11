function executarExercicio24(){
    alert("24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total.")

    let salarioFixo = parseFloat(prompt("Digite seu salario"))
    let vendas = parseFloat(prompt("Digite o valor das suas vendas"))

    let salarioTotal=0

    if(vendas<=1500){
        salarioTotal=salarioFixo+0.03*vendas
    }else{
        salarioTotal=salarioFixo+0.03*vendas+(vendas-1500)*0.05
    }
    alert('Seu salario total é de:' + salarioTotal)
}