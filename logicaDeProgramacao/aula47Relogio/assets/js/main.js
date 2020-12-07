function relogio() {
    const relogio = document.querySelector('.relogio');
    const timerStatus = document.querySelector('.timerStatus');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, (1000));
    }

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;
        if (elemento.classList.contains('iniciar')) {
            timerStatus.innerHTML = 'Timer iniciado!';
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            timerStatus.innerHTML = 'Timer pausado!';
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (elemento.classList.contains('zerar')) {
            timerStatus.innerHTML = '';
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
} relogio();