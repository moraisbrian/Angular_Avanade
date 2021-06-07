module.exports = (dia, mes, ano) => {
    const meses = [31, ano % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dias = -dia;
    for (let i = mes - 1; i < meses.length; i++) {
        dias += meses[i];
    }
    
    return dias;
}