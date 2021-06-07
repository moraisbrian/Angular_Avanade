const promise = new Promise((resolve, reject) => {
    let x = Math.random(); // Gera um valor entre 0 e 1

    // Consideremos que os valores acima de 0.5 seja aceitáveis. Caso contrário, consideremos como erro

    if (x > 0.5) {
        resolve('Valor aceitável: ' + x);
    } else {
        reject('Valor inaceitável: ' + x);
    }
});

promise
    .then(s => s.toUpperCase())
    .then(s => console.log(s))
    .catch(console.error);