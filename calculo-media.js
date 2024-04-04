const nota01 = 7;
const nota02 = 8.5;
const nota03 = 9;

const medía = calcularMedía(nota01, nota02, nota03)
const situação = verificarSituação(medía)

alert(`Sua média é ${medía}. Situação: ${situação}`);

function calcularMedía(nota01, nota02, nota03) {
    return (nota01 + nota02 + nota03) / 3
}
function verificarSituação(medía) {
    if (medía <5) {
        return "Reprovado";
    }
    else if (medía >= 5 && medía < 6.9){
        return "Recuperação";
    }
    else {
        return "Aprovado";
    }
}

