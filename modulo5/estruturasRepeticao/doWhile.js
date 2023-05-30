const usuario = {nome: 'Marcos', idade: 28, time: 'Botafogo'};
const msgBoasVindas0 = 'Bem vindo(a), torcedor(a) Alvinegro!';
const msgBoasVindasGeral = 'Bem vindo(a), amante do esporte!';

const msgEscolha = 'Clique no setor para qual deseja comprar seu ingresso!';
const msgFinal = 'Divirta-se no Maracanã';

let numRepeticao = 0;

do {
    usuario.time === 'Botafogo' && usuario.idade >= 18
        ? console.log(msgBoasVindas0)
        : usuario.time === 'Vasco' && usuario.idade >=18
        ? console.log(msgBoasVindas1)
        : usuario.idade >= 18
        ? console.log(msgBoasVindasGeral) 
        : console.log('Não vendemos ingresso para torcedores menores de 18 anos');

    console.log(msgEscolha);
    console.log(msgFinal);

    numRepeticao++; // incremento para sempre adiciounar +1 na var let 
} while (numRepeticao < 50000); // condição verdadeira para repetição

console.log('Ingressos Esgotados!');