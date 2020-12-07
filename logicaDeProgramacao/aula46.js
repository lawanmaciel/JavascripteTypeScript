function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora);
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 3000);

setTimeout(() => {
    console.log('Olá Mundo!');
}, 5000);