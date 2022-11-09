/* O IMC -Indice de Massa Corporal e um criterio da organização Mundial da Saúde para da uma indicação sobre
a condição de peso de uma pessoa asulta 

formula do IMc:
IMC = peso / (altura * altura)

elbore um algaritim:
IMC em adultos condições:
-abaixo de 18,5 abaixo do peso;
-entre 18,5 e 25 peso noral;
- entre  25 a 30 acima do peso;
-entre 30 a 40 obseo;
-acima de 40 obsidade Grave;

*/

const peso = 90;
const altura = 1.75;
const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
}else if (imc >= 18.55 && imc < 25){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do peso');
}else if (imc >= 30 && imc < 40) {
    console.log ('Obeso');
}else {
    console.log('obsidade Grave');
}
