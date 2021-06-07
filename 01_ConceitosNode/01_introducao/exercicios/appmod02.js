module.exports = (valor) => {
    const cedulas50 = Math.trunc(Math.floor(valor / 50));
    const cedulas20 = Math.trunc(Math.floor((valor % 50) / 20));
    const cedulas10 = Math.trunc(Math.floor(valor % 50 % 20) / 10);
    const cedulas5 = Math.trunc(Math.floor(((valor % 50) % 20) % 10) / 5);

    return {
        'Notas de 50': cedulas50,
        'Notas de 20': cedulas20,
        'Notas de 10': cedulas10,
        'Notas de 5': cedulas5
    }
}