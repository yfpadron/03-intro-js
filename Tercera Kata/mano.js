import Carta from "./carta.js";

export default class Mano {
	constructor(cartas) {
		this.cartas = cartas;
	}

	cartaMasAlta(cartas) {
		cartas.sort(function(a, b) {
			if (b.puntosCartas() > a.puntosCartas()) {
				return 1;
			} else if (b.puntosCartas() < a.puntosCartas()) {
				return -1;
			}
			return 0;
		});
		return cartas;
	}

	parejas(params) {}

	doblesParejas(params) {}

	trio(params) {}

	escalera(params) {}

	color(params) {}

	full(params) {}

	poker(params) {}

	escalerColor(params) {}
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
