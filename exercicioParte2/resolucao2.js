console.log('Resultado do exercício 1');

function calcMedia(av1, av2, av3){
    const notaMedia = (av1 + av2 + av3) / 3;
    console.log(`a média desse aluno é ${notaMedia}`);
    return notaMedia;
};

calcMedia();

console.log('Resultado do exercício 2');

function calcMediaNova(av1, av2, av3, av4){
    const notaMedia = calcMedia(av1, av2, av3);
    const mediaFinal = (notaMedia + av4) / 2;
    console.log(`a média final desse aluno é ${mediaFinal}`);
};

calcMediaNova();

/* Resolução do exercício 2
   Aqui começo com uma pequena adaptação da primeira resolução

function calcularMediaAdaptado(nota1, nota2, nota3) {
    const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
    return mediaDasNotas;
}

function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
    const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota3);
    const mediaFinal = (mediaSemPf + notaPf) / 2;
    console.log(`a média final desse aluno é ${mediaFinal}`);
} */

console.log('Resultado do exercício 3');

function calcTemperatura(temperaturaCelsius){
    const temperaturaFarenheit = (9 / 5) * (temperaturaCelsius) + 32;
    console.log(`A temperatura correspondente em Farenheit é de ${temperaturaFarenheit}°F`);
};

calcTemperatura();

console.log('Resultado do exercício 4');

function pagarComImposto(valorEtiqueta){
    const totalComImposto = 1.08875 * valorEtiqueta;
    console.log(`O valor a ser pago é ${totalComImposto}`);
};

pagarComImposto();
