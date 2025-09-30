document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('calendario-container');

    fetch('/data/calendario-liturgico.json')
        .then(response => response.json())
        .then(data => {
            const meseCorrente = data['2025-09'];
            const giorni = meseCorrente.giorni;

            giorni.forEach(giorno => {
                const giornoDiv = document.createElement('div');
                giornoDiv.classList.add('giorno-calendario');
                if (giorno.domenica) {
                    giornoDiv.classList.add('domenica');
                }

                const numeroGiorno = document.createElement('div');
                numeroGiorno.classList.add('numero-giorno');
                numeroGiorno.textContent = giorno.giorno;

                const santo = document.createElement('div');
                santo.classList.add('santo');
                santo.textContent = giorno.santo;

                const tempoLiturgicoClass = `tempo-liturgico-${giorno.tempo_liturgico.toLowerCase()}`;
                giornoDiv.classList.add(tempoLiturgicoClass);


                giornoDiv.appendChild(numeroGiorno);
                giornoDiv.appendChild(santo);

                container.appendChild(giornoDiv);
            });
        });
});
