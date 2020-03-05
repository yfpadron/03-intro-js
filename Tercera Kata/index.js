import Carta from "./carta.js";
import Mano from "./mano.js";

let result = { win: 1, loss: 2, tie: 3 };

class PokerGame {
	constructor(jugador1, jugador2) {
		this.jugador1 = jugador1;
		this.jugador2 = jugador2;
	}
}

// ÁREA DE PRUEBAS 2H 3D 5S 9C KD

let c1 = new Carta(2, "H");
let c2 = new Carta(3, "D");
let c3 = new Carta(5, "S");
let c4 = new Carta(9, "C");
let c5 = new Carta("K", "D");

let cartas = [c1, c2, c3, c4, c5];

let mano1 = new Mano(cartas);

console.log(mano1);

console.log(mano1.cartas);

console.log(mano1.cartaMasAlta(mano1.cartas));
