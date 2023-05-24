// escopo em JavaScript são os limites para as quais a informação é válida

const primeiraVariavelDoCodigo = 'texto inicial'; 

// var global (limites maiores)
// lembrando que a var const não pode ser alterada, ela é fixa!

function printToConsole(){
    const primeiraVariavelDoCodigo = 'segundo texto';
   
    // agora existe 2 var com o mesmo nome sendo uma dentro do escopo da function
    // essas informações ficam validas apenas dentro da function (limtada a function {})
    // var do escopo da function
    // não se pode ter 2 var com o mesmo nome no mesmo escopo

    console.log(primeiraVariavelDoCodigo);
};

printToConsole();

// quando rodar o resultado aparecerá "segundo texto"

// lembrando que a var const não pode ser alterada, ela é fixa!


// mesmo que tenha função dentro de função, pode ser ter var com mesmo nome mas mantendo o escopo da função

/* exemplo:

    function printToConsole(){
        const primeiraVariavelDoCodigo = "segundo texto";
        function secondFunction(){
            cont primeiraVariavelDoCogio = "terceiro texto"
        };
        console.log(primeiraVariavelDoCodigo);
        secondFunction();
    };

na tela irá aparecer segundo texto e em abaixo terceiro texto 

definição não é execução, primeiro executar o console.log depois a secondFunction! */

// se não estiver var declarada no escopo ele prioriza a "global" caso seja função dentro de função procura a var declarada acima (de dentro pra fora)
