const usuario = {nome: 'Marcos', idade: 28, time: 'Botafogo'};
const msgBoasVindas0 = 'Bem vindo(a), torcedor(a) Alvinegro!';
const msgBoasVindas1 = 'Bem vindo(a), torcedor(a) Cruzmaltino!';
const msgBoasVindas2 = 'Bem vindo(a), torcedor(a) Tricolor!';
const msgBoasVindas3 = 'Bem vindo(a), torcedor(a) Rubro-Negro!';
const msgBoasVindas4 = 'Bem vindo(a), amante do esporte!';

if (usuario.time === 'Botafogo') {
    console.log(msgBoasVindas0);
} else if (usuario.time === 'Vasco') {
    console.log(msgBoasVindas1);
} else  if (usuario.time === 'Fluminense') {
    console.log(msgBoasVindas2);
} else if (usuario.time === 'Flamengo') {
    console.log(msgBoasVindas3);
} else {
    console.log(msgBoasVindas4);
}

const msgEscolha = 'Clique no setor para qual deseja comprar seu ingresso!';
const msgFinal = 'Divirta-se no Maracanã';

console.log(msgEscolha);
console.log(msgFinal);