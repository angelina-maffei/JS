/* 1- Crie uma classe para representar carros.]
os carros possui uma marca, uma cor e uma gasto medio de combustivel por km rodado.
cire um metodo que dado a quantidade do km e o preço do combustivel nos de o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorkm;


    constructor (marca,cor,gastoMedioPorkm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorkm = gastoMedioPorkm;
        
    }
    calcularGastoPercurso(distsnciaEmKm,precoCombustivel){
        return distsnciaEmKm * this.gastoMedioPorkm *precoCombustivel;

    }
}

const uno = new Carro ('fiat', 'prata', 1/12);
console.log(uno.calcularGastoPercurso(70, 5)); 




