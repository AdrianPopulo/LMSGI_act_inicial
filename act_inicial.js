'use strict';

let numeroSecret;
let intentsMaxims = 0;
let intentsFets = 0;

const inputIntents = document.querySelector('header input');
const btnGuardar = document.querySelector('header .btn');
const btnReinicia = document.querySelectorAll('header .btn')[1];

const inputGuess = document.querySelector('.guess');
const btnProva = document.querySelector('.zona-joc .btn');

const txtIntents = document.querySelector('.zona-joc p');
const missatge = document.querySelector('.zona-missatge');
const body = document.body;

function guardarIntents() {
    const valor = Number(inputIntents.value);

    if (valor > 0) {
        intentsMaxims = valor;
        intentsFets = 0;

        numeroSecret = Math.floor(Math.random() * 100) + 1;

        txtIntents.textContent = `Intents restants: ${intentsMaxims}`;
        missatge.textContent = 'Comencem la partida!!';
        body.style.backgroundColor = '#222';
    }
}

function jugar() {
    const numeroUsuari = Number(inputGuess.value);

    if (numeroUsuari < 1 || numeroUsuari > 100) {
        missatge.textContent = 'Introdueix un número entre 1 i 100';
        return;
    }

    intentsFets++;
    const intentsRestants = intentsMaxims - intentsFets;
    txtIntents.textContent = `Intents restants: ${intentsRestants}`;

    if (numeroUsuari === numeroSecret) {
        missatge.textContent = 'Correcte, has endevinat el número!';
        body.style.backgroundColor = 'green';
        return;
    }

    if (intentsRestants === 0) {
        missatge.textContent = `Has perdut! El número era ${numeroSecret}`;
        body.style.backgroundColor = 'red';
        return;
    }

    if (numeroUsuari > numeroSecret) {
        missatge.textContent = 'El número secret és més PETIT';
    } else {
        missatge.textContent = 'El número secret és més GRAN';
    }
}

btnGuardar.addEventListener('click', guardarIntents);
btnProva.addEventListener('click', jugar);

btnReinicia.addEventListener('click', () => {
    location.reload();
});