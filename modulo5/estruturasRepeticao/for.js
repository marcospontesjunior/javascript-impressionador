/* Adicionar o valor do index aos valores no array

   ex.: index: 0, 1, 2, 3,  4,  5,  6,  7
        array: 2, 3, 5, 7, 11, 13, 17, 19
        resultado: 2, 4, 7, 10, 15, 18, 23, 26 */

const regularArray = [2, 3, 5, 7, 11, 13, 17, 19]; 

/* utilizando o while

let count = 0;

while (count < regularArray.length) {
    regularArray[count] += count; 
    count++;
} */

// usando for

for (let count = 0; count < regularArray.length; count++) {
    regularArray[count] += count;
}

console.log('O array atual é: ', regularArray);