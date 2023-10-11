function executarExercicio22(){
    alert("22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).")

    let salarioTotal=0
    let horasTrabalhadas = parseInt(prompt("Digite quantas horas foram trabalhadas no mês:"))
    let salarioHora = parseFloat(prompt("Digite seu salario fixo mensal:"))

    let horasExtras = horasTrabalhadas-160

    if(horasExtras>0){
        salarioTotal=salarioHora*160+horasExtras*salarioHora+salarioHora*1,5
    }else{
        salarioTotal=salarioHora*160
    }
    alert("O seu salario total é de:"+salarioTotal)
}