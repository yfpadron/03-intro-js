class Carta {
	constructor(valor, palo) {
        this.valor = valor;
		this.palo = palo;
    }
    
	ordenarCartas() {
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
            A: 14,
        };

        return dicCartaValor[this.valor];
	}
}

//Pruebas...
let nuevacarta = new Carta ("J","S");

console.log(nuevacarta.palo);
console.log(nuevacarta.valor);

let orden = nuevacarta.ordenarCartas();

console.log(orden);