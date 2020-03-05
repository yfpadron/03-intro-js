class Carta {
	//Constructor
	constructor(valor, palo) {
		if (this.validarValor(valor)) {
			this.valor = valor;
		} else {
			console.log(valor + " No es un valor de carta correcto");
		}
		if (this.validarPalo(palo)) {
			this.palo = palo;
		} else {
			console.log(palo + " No es un palo de carta correcto");
		}
	}

	//Validar los valores de las cartas
	validarValor(valor) {
		let arrayValor = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
		for (let index = 0; index < arrayValor.length; index++) {
			if (valor == arrayValor[index]) {
				return true;
			}
		}
		return false;
	}

	//Validar los palos de las cartas
	validarPalo(palo) {
		let arrayPalo = ["S", "H", "C", "D"];
		for (let index = 0; index < arrayPalo.length; index++) {
			if (palo == arrayPalo[index]) {
				return true;
			}
		}
		return false;
	}

	puntuarCartas() {
		let dicCartaValor = {
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
			7: 7,
			8: 8,
			9: 9,
			T: 10,
			J: 11,
			Q: 12,
			k: 13,
			A: 14
		};
		return dicCartaValor[this.valor];
	}
}

//Pruebas...
let nuevacarta = new Carta("J", "S");
let nuevacarta1 = new Carta(10, "S");
let nuevacarta2 = new Carta(2, "I");
let nuevacarta3 = new Carta(12, "I");

console.log(nuevacarta.palo);
console.log(nuevacarta.valor);
