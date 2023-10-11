function executarExercicio08(){
    alert("8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total  de eleitores. ")

    let votosValidos = parseInt(prompt("Digite a quantidade de votos validos"))
    let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos"))
    let votosNulos = parseInt(prompt("Digite a quantidade de votos validos"))
   
    let totalVotos = votosValidos + votosBrancos + votosNulos

    let percentualVotosValidos = votosValidos*100/totalVotos
    let percentualVotosBrancos = votosBrancos*100/totalVotos
    let percentualVotosNulos= votosNulos*100/totalVotos

    alert("Total de votos: " + totalVotos)
    alert("Total de votos validos: " + percentualVotosValidos + "%")
    alert("Total de votos brancos: " + percentualVotosBrancos+ "%")
    alert("Total de votos nulos: " + percentualVotosNulos+ "%")

}