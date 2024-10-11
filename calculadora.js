export function somarDoisNumeros(numeroUm, numeroDois) {
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        return "Pelo menos um dos valores não é um número válido.";
    }
    return numeroUm + numeroDois;
}