/* A Sequência de Fibonacci

- Sequência de numérica proposta pelo matemático italiano "Leonardo de Pisa" e que desperta fascínio por
  representar números e padrões identificados em toda a natureza.

- A Sequência de Fibonacci se dá atravéz da definição do número atual com a soma de seus dois números antecessores.

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, ... */

function calculateFibonacciTerm (termNumber) {
    let lastTerm = 1;
    let secondToLast = 0;

    if(termNumber === 0) {
        return 0;
    }
    
    if(termNumber === 1) {
        return 1;
    }
    
    let currentIteration = 2;
    
    while(currentIteration <= termNumber) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        currentIteration++;
    }
    return lastTerm;
}

console.log(`O valor do termo número 6 da sequência de Fibonacci é ${calculateFibonacciTerm(6)}`);