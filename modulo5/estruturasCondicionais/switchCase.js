const usuario = {nome: 'Marcos', idade: 28, time: 'Botafogo'};
const msgBoasVindas0 = 'Bem vindo(a), torcedor(a) Alvinegro!';
const msgBoasVindas1 = 'Bem vindo(a), torcedor(a) Cruzmaltino!';
const msgBoasVindas2 = 'Bem vindo(a), torcedor(a) Tricolor!';
const msgBoasVindas3 = 'Bem vindo(a), torcedor(a) Rubro-Negro!';
const msgBoasVindasGeral = 'Bem vindo(a), amante do esporte!';

switch (usuario.time) {
    case 'Botafogo':
        console.log(msgBoasVindas0);
        break; // seve para não ficar rodando em cascata, executa e para. Agrupar mais case a um comando não precisa do break
    case 'Vasco':
        console.log(msgBoasVindas1);
        break;
    case 'Fluminense':
        console.log(msgBoasVindas2);
        break;
    case 'Flamengo':
        console.log(msgBoasVindas3);
        break;
    default: // para comportamento padrão, nesse caso, nenhum time listado! Não necessita break.
        console.log(msgBoasVindasGeral);
}

const msgFinal = 'Divirta-se no Maracanã';

console.log(msgFinal);