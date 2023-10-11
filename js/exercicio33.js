function executarExercicio33(){
    alert("33) Ler dois valores e imprimir uma das três mensagens a seguir:\n‘Números iguais’, caso os números sejam iguais\n‘Primeiro é maior’, caso o primeiro seja maior que o segundo;\n‘Segundo maior’, caso o segundo seja maior que o primeiro. ")

    let valor01 = parseFloat(prompt("Digite um numero"))
    let valor02 = parseFloat(prompt("Digite outro numero"))

    let saida = (valor01>valor02)? "Primeiro é maior":(valor02>valor01)?"Segundo maior":"Numeros iguais"

    alert(saida)
}