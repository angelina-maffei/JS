
const { gets, print } = require('./funcoes-auxiliares');


const quanttidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quanttidadeDeAlunos; i++) {
    const numerosSorteados = gets();   
    if (numerosSorteados > maiorValorEncontrado) {
        maiorValorEncontrado = numerosSorteados; 
    }
   
}

print(maiorValor);