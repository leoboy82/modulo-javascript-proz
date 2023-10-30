const numerosDaSorte = [37, 14, 26, 5, 94, 87];

// Copia o array numerosDaSorte
const copiaNumerosDaSorte = numerosDaSorte.slice();

for (let i = 0; i < copiaNumerosDaSorte.length; i++) {
    const numero = copiaNumerosDaSorte[i];

    if (numero % 2 === 0 && numero < 50) {
        console.log(`${numero} é par e menor que 50`);
    } else if (numero < 50) {
        console.log(`${numero} é menor que 50`);
    } else {
        console.log(`${numero} é maior que 50`);
    }
}