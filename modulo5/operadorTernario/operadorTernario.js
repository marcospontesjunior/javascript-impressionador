const usuario = {nome: 'Marcos', idade: 28, time: 'Botafogo'};
const msgBoasVindas0 = 'Bem vindo(a), torcedor(a) Alvinegro!';
const msgBoasVindas1 = 'Bem vindo(a), torcedor(a) Cruzmaltino!';

usuario.time === 'Botafogo'
    ? console.log(msgBoasVindas0)
    : console.log(msgBoasVindas1);

/* para um caso de if-else if-else

const msgBoasVindasGeral = 'Bem vindo(a), amante do esporte!';

usuario.time === 'Botafogo'
    ? console.log(msgBoasVindas0)
    : usuario.time === 'Vasco' 
    ? console.log(msgBoasVindas1)
    : console.log(msgBoasVindasGeral) usando o exemplo anterior 

para o caso de 1 avaliação condicional o operador ternário é ideal, para o caso de 2 começa a ficar questionável
e para o caso de mais de 2 fica uma estrutura muito grande. Nesse caso melhor usar o if-else if-else ou switch case. */

const msgEscolha = 
    'Clique no setor para qual deseja comprar seu ingresso!';
const msgFinal = 'Divirta-se no Maracanã';

console.log(msgEscolha);
console.log(msgFinal);