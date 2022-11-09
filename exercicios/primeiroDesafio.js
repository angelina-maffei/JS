/*Faça um programa para calcular o valor gasto de combustível em uma viagem 
você terá 3 variáveis,. Sendo elas:
1.preço do combustível;
2. valor médio de combustivel carro por km; 
3. distância em km; 
imprima no console o valor que será gasto  para realizar esta viagem.

*/

const precoCombustivel = 3.30;
const kmLitros = 10;
const distanciaKm = 592;

const litrosConsumidos = distanciaKm / kmLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);





console.log();
