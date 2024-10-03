function imc(peso, altura) {
    return peso / (altura * altura);
}

function situacao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso ideal";
    } else if (imc < 30) {
        return "Levemente acima do peso";
    } else if (imc < 35) {
        return "Obesidade grau I";
    } else if (imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}