console.log('Resultado do exercício 1');

const primeiraVariavel = 2148;
let segundaVariavel; 

console.log(`O valor da primeira variável é ${primeiraVariavel}`);
// O valor da primeira variável é 2148

segundaVariavel = 23;

console.log(`Minha segunda variável vale ${segundaVariavel}`);
// Minha segunda variável vale 23

console.log(`O valor da soma das minhas duas variáveis é ${primeiraVariavel + segundaVariavel}`);
// O valor da soma das minhas duas variáveis é 2171

segundaVariavel = segundaVariavel ** 2;
console.log(segundaVariavel); // 529

segundaVariavel = segundaVariavel / 3;
console.log(segundaVariavel); // 176.333333333333334

console.log('Resultado do exercício 2');

const booleana1 = true;
const booleana2 = false;

console.log(`Operação AND entre as duas variáveis: ${booleana1 && booleana2}`); 
// Operação AND entre as duas variáveis: false

console.log(`Operação OR entre as duas variáveis: ${booleana1 || booleana2}`); 
// Operação AND entre as duas variáveis: true

const booleana3 = false;

console.log(`Operação AND entre as três variáveis: ${booleana1 && booleana2 && booleana3}`); 
// Operação AND entre as duas variáveis: false

console.log(`Operação OR entre as três variáveis: ${booleana1 || booleana2 || booleana3}`); 
// Operação AND entre as duas variáveis: true

