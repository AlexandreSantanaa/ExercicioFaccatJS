function executarExercicio21(){
    alert("21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é  de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. ")

    let horasInicio = parseInt(prompt("Digite a hora que iniciou o jogo de xadrez"))
    let horasFim = parseInt(prompt("Digite a hora que terminou o jogo de xadrez"))

    let horaTotais=0

    if(horasInicio>horasFim){//04 22
        horaTotais=(24-horasInicio)+horasFim
    }else{
        horaTotais=horasFim-horasInicio
    }
    
    alert("O jogo durou: "+horaTotais+" horas")
}