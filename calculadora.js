export function somarDoisNumeros(numeroUm, numeroDois) {
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        return "Pelo menos um dos valores não é um número válido.";
    }
    return numeroUm + numeroDois;
}

export function subtrairDoisNumeros(numeroUm, numeroDois) {
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        return "Pelo menos um dos valores não é um número válido.";
    }
    return numeroUm - numeroDois;
}

export function multiplicarDoisNumeros(numeroUm, numeroDois) {
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        return "Pelo menos um dos valores não é um número válido.";
    }
    return numeroUm * numeroDois;
}


export function dividirDoisNumeros(numeroUm, numeroDois) {
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        return "Pelo menos um dos valores não é um número válido.";
    }
    if(numeroDois == 0){
        return "Não é possivel dividir por ZERO"
    }
    return numeroUm / numeroDois;
}