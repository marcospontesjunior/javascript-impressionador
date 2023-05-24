/* - Parâmetro da função é o que a função precisa para executar corretamente.

   - Quando escrever uma função que precise de uma informação (parâmetro) a 
     ser executada, ela vai ser definida dentro dos ().  */

function pegarComanda(numeroDaVez){
    console.log(`O número da vez é o ${numeroDaVez}`);
    console.log(
        `O número da vez (${numeroDaVez}) ao quadrado vale: ${numeroDaVez ** 2}`);
};

pegarComanda(2) // dentro do () é o argumento.

// O número da vez é o 2
// O numero da vez (2) ao quadrado vale: 4 
