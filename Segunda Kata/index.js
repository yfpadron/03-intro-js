let expRegExpRomanNum = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

//Función para validar si es un número romano
function validadorRomanNum(roman) {
	return expRegExpRomanNum.test(roman);
}

//Función para convertir un número Romano a Árabe
function convertNumRomanosToArabes(romanNum) {
	if (romanNum == null) {
		console.log("Se debe indicar un número romano");
	} else if (validadorRomanNum(romanNum) == false) {
		console.log("El número indicado no es correcto");
	} else {
		let resultado = 0;
		let value = 0; // Initialise!
		let prev = 0;

		for (let i = 0; i < romanNum.length; i++) {
			let current = arabeNumOfCharRoma(romanNum.charAt(i));
			if (current > prev) {
				resultado -= 2 * value;
			}
			if (current !== prev) {
				value = 0;
			}
			value += current;
			resultado += current;
			prev = current;
		}
		return resultado;
	}
}

//Función para convertir de números Árabes a Romanos
function convertNumArabesToRomanos(arabeNum) {
	if (arabeNum == null) {
		console.log("Se debe indicar un número");
	} else if (arabeNum < 1 || arabeNum > 3999) {
		console.log("El número indicado debe estar entre el 1 y el 3999");
	} else {
		let arabeArray = [1, 5, 10, 50, 100, 500, 1000];
		let romanArray = ["I", "V", "X", "L", "C", "D", "M"];
		let resultado = [];
		let tempNum;
		let tempLetra;
		let valor;
		let posicion;
		let insertar;

		for (
			let i = 6;
			(tempNum = arabeArray[i]), (tempLetra = romanArray[i]);
			i--
		) {
			if (arabeNum >= tempNum) {
				let seRepite = Math.floor(arabeNum / tempNum);
				arabeNum -= seRepite * tempNum;
				if (seRepite < 4) {
					while (seRepite--) {
						resultado.push(tempLetra);
					}
				} else {
					valor = resultado.pop();
					posicion = (valor ? romanArray.indexOf(valor) : i) + 1;
					insertar = tempLetra + (romanArray[posicion] || "M");
					resultado.push(insertar);
				}
			} else {
				resultado.push("");
			}
		}
		return resultado.join("");
	}
}

//Funcion para obtener el valor numerico del caracter romano
function arabeNumOfCharRoma(charRoman) {
	switch (charRoman) {
		case "I":
			return 1;
		case "V":
			return 5;
		case "X":
			return 10;
		case "L":
			return 50;
		case "C":
			return 100;
		case "D":
			return 500;
		case "M":
			return 1000;
		default:
			return -1;
	}
}

console.log(
	"El número Árabe correspondiente al Romano MMMCXXV es: " +
		convertNumRomanosToArabes("MMMCXXV")
);
console.log(
	"El número Romano corresponde al Árabe 3124 es: " +
		convertNumArabesToRomanos(3124)
);
console.log(
	"¿Es un número Romano válodo el resultado de la conversión anterior? " +
		validadorRomanNum(convertNumArabesToRomanos(3124))
);
