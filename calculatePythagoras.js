// função para calcular raiz quadrada
function calculateSquareRoot(radicand){
    return radicand ** (1 / 2);
};

// função para calcular os catetos
function calculatePythagoras(side1, side2){ 
    // console.log('Os tamanhos dos catetos do meu triângulo retângulo são: ', side1, side2); printar o paramentro de forma mais facil
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum); // o argumento para calular a raiz quadrada é a var sum que calcula os catetos
}; 

console.log(
    `A hipotenusa de um triângulo retângulo de lados 3 e 4 é ${calculatePythagoras(3, 4)}`
);

// usando 3 e 4 de exemplo no argumento