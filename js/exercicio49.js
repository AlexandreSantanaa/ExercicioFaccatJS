function executarExercicio49(){
    alert("49)  Acrescente  uma  mensagem  'NOVO  CÁLCULO  (1-S/2-N)?'  ao  final  do  exercício  [48].  Se  for respondido '1' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo. ")

    let confirmacao = 1

    do{
        let nota01 = parseFloat(prompt("Digite a primeira nota"))
        let nota02 = parseFloat(prompt("Digite a segunda nota"))

        while(nota01<0 || nota01>10){
            nota01 = parseFloat(prompt("Digite a primeira nota novamente"))
        }

        while(nota02<0 || nota02>10){
            nota02 = parseFloat(prompt("Digite a segunda nota novamente"))
        }
        
        let media = (nota01+nota02)/2

        alert("A media é:"+ media)

        confirmacao = parseInt(prompt("Deseja efetuar um novo calculo?\n1-sim\n2-não"))

    }while(confirmacao>1)
    
}