const valor1 = true;
const valor2 = false;

const valor1EValor2 = valor1 && valor2;
// AND (operação e) usamos essa operação quando desejamos que duas condições sejam simultaneamente verdadeiras.

const valor1OUValor2 = valor1 || valor2;
// OR (operação ou) usamos essa operação quando desejamos que pelo menos uma das condições seja verdadeira.

const inversoValor1 = !valor1;
const inversoValor2 = !valor2;
// NOT (inversor) esse é um operador aplicado a um valor booleano quando queremos o seu inverso.

console.log(valor1EValor2); //false
console.log(valor1OUValor2); //true
console.log(inversoValor1); //false
console.log(inversoValor2); //true