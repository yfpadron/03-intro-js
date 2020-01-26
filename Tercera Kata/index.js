let carta = require('./carta');
let mano = require('./mano');

let result = { "win": 1, "loss": 2, "tie": 3 };

class PokerGame {
    constructor (jugador1, jugador2){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }
}

//Pruebas ...
let nuevacarta = new Carta (9,"H");

console.log(nuevacarta.palo);
console.log(nuevacarta.valor);

let orden = nuevacarta.ordenarCartas();

console.log(orden);