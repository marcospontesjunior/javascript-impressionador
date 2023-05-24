function equacaoBhaskara(a, b, c){
    const delta = b ** 2 - 4 * a * c;
    const x1 = (- b + calcularRaizQuadrada(delta)) / (2 * a);
    const x2 = (- b - calcularRaizQuadrada(delta)) / (2 * a);
    console.log(
        `Os dois pontos de x nos pontos da parábola no eixo x é ${x1} e ${x2}`
    );
};

function calcularRaizQuadrada(base){
   return base ** (1 / 2); 
};

equacaoBhaskara(); // passar valores de a, b e c aqui 

// return é usado quando se quer produzir um valor e usar fora da função, aproveitar o resultado.
// return "mata" a função (tudo depois dela não será executada).

// o motor de JS lê previamente as funções, por isso que a função calcularRaizQuadrada pode ficar depois
// da função equacaoBhaskara
