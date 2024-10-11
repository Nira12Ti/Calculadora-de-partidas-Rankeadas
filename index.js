let quantidadeVitorias = 100;
let quantidadeDerrotas = 5;
let nomeHeroi = "Superman";

function calcularNivelHeroi(score) {
    if(score <= 10){
        return "Ferro";
    } else if (score >= 11 && score <= 20) {
        return "Bronze";
    } else if (score >= 21 && score <= 50) {
        return "Prata";
    } else if (score >= 51 && score <= 80) {
        return "Ouro";
    } else if (score >= 81 && score <= 90) {
        return "Diamante";
    } else if (score >= 91 && score <= 100) {
        return "Lendario";
    } else if (score >= 101) {
        return "Imortal";
    } 
    
}

function calcularScoreHeroi(quantidadeVitorias, quantidadeDerrotas) {
    return quantidadeVitorias - quantidadeDerrotas;

}

function init() {
    const score = calcularScoreHeroi(quantidadeVitorias, quantidadeDerrotas);
    const nivelHeroi = calcularNivelHeroi(score);

    console.log(`O heroi tem saldo de ${score} esta no nivel ${nivelHeroi}`);
}

init();