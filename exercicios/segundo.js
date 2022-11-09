/*Faça um programa para calcular o valor gasto de combustível em uma viagem 
você terá 5 variáveis,. Sendo elas:
1.preço do Etanol;
2.preço da gasolina;
3. o tipo de combustivel que esta no seu carro;
4. gasto médio de combustivel carro por km; 
5. distância em km; 
Imprima no console o valor que será gasto  para realizar esta viagem.

*/
const precoEtanol = 5.79
const precoGasolina = 6.66;
const kmLitros = 10;
const distanciaKm = 100;
const tipoCombusitivel = 'Gasolina ';

const litrosConsumidos = distanciaKm / kmLitros;

if(tipoCombusitivel ==='Gasolina'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}



