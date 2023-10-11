function executarExercicio78(){
    alert("78) Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a  leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. ")

    let nome = []

    for(let i = 0; i<=3; i++){
        nome[i]=prompt("Digite o nome " +(i+1))
    }

    let descubraNome = prompt("Digite o nome ")
    let confirmacao = false
    let cont
    
    for(cont = 0; cont<=3; cont++){
        if(descubraNome == nome[cont]){
            confirmacao=true
            break;
        }
    }

    if(confirmacao==true){
        alert("achei "+ descubraNome +"="+nome[cont])
    } else{
        alert("não achei")
    }
}
