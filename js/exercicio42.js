function executarExercicio42(){
    alert("2) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: \n- Ter no mínimo 65 anos de idade. \n- Ter trabalhado no mínimo 30 anos. \n- Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos. \nCom base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. ")

    let codigoEmpregado = prompt("Digite seu codigo:")
    let anoNasciemnto = parseInt(prompt("Digite o ano do seu nascimento:"))
    let anoIngressoEmpresa = parseInt(prompt("Digite o ano em que voce ingressou na empresa"))
    let anoAtual = 2065
    let idade = anoAtual-anoNasciemnto
    let tempoEmpresa = anoAtual-anoIngressoEmpresa

    let resposta = (idade>=65 || tempoEmpresa>=30 ||(idade>=60 && tempoEmpresa>=25))?"deve requerer aposentadoria":'não deve requerer apostadoria'

    alert ("O empregado " + codigoEmpregado + " tem " + idade +" anos e possui " + tempoEmpresa + " anos de empresa, portanto ele " + resposta)
}