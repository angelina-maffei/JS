/* Elabore um algoritmo que calcule o que deve ser pago por um produto, cosiderando o preço normal da etiqueta
e a exolada da condição de pagamento.
ultiliza o código da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calcuo
adequado.
 
Código condição de pagamento:
1 -Á vista de Debito, recebe 10% de desconto;
2 -Á vista no Dinheiro ou PIX, recebe 15% de desconto;
3 -em duas vezes. preço normal da etiqueta sem huros;
4 -Acima de duas vezes, preço normaal da etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4

if(formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
