const intervalTime = 1500;
const gameTime = 15000;
let timer = null;
let timeout = null;
let score;

let holes$ = document.querySelectorAll (`.hole`);
let startBtn$ = document.querySelector (`#startBtn`);
startBtn$.addEventListener(`click`, init);

addMoleEvent();
// Para que funcione el click.
function addMoleEvent () {
    let moles$ = document.querySelectorAll (`.mole`);
    for (let mole$ of moles$) {
        mole$.addEventListener (`click`, smackHans);}

}

function init() {
    // Limpio el anterior intervalo si lo hubiera.
    if (timer !== null) {
        clearInterval(timer);
    }
    if ( timeout !== null){
        clearTimeout (timeout);
    }
    // Pongo el score a 0.
    score = 0;
    // Para que le aparezca el score al usuario.
    writeScore ();
    // Defino un intervalo cada x segundos.
    timer = setInterval (showHans, intervalTime);

    timeout=setTimeout(endGame, gameTime);
// Para que no tarde  dos segundos en empezar a salir topos y empiece de inmediato.
    showHans();

}

function endGame() {
    hideAllHans();
    clearInterval(timer);
    alert (`Has conseguido ` + score + ` puntos`);
}

// Para que el contador funcione.
function writeScore () {
    let score$ = document.querySelector (`.score`);
    score$.textContent = score;
}

// Para que aparezca el topo y luego le hemos metido la función hideHans para que desaparezca.
function showHans () {
    let hole$ = getRandomHole();
    hideAllHans ();
    hole$.classList.add (`up`);
}

//  Para que desaparezca el topo.
function hideAllHans( ) {
    for (let hole$ of holes$) {
        hole$.classList.remove (`up`);
    }
}
// Número aleatorio. En este caso del 0 al 5.
function getRandomHole () {
    let randomIndex =Math.floor (Math.random () * holes$.length);
    return holes$ [randomIndex];
}

// Para sumar en el contador cada vez que le demos a un topo, que es cuando el evento click funciona.

function smackHans () {
    score++;
    writeScore();
    // Lo siguiente es para que cada vez que le demos a un topo se escuenda instantaneamente:
    this.parentNode.classList.remove (`up`);
    // topo/ agujero de arena/ lista de clases/ borrar/ subida del topo.
}

