function incrementarJuros(valor, percentalJuros){
    const valorDeAcrecimo = (percentalJuros / 100) * valor;
    return valor + valorDeAcrecimo
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20)); 