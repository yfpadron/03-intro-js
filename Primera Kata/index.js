//Función para dar respuesta a la Primera Kata

function primeraKata (numero){
    if (numero < 1 || numero > 100){
        console.log("Debe ser un número entre el 1 y el 100");
    } else {
        let imprimir = "";
        imprimir = esDivisiblepor3(numero) + esDivisiblepor5(numero) + esDivisiblepor7(numero) + contieneNum(numero);
        if (imprimir == "") {
            console.log(numero);
        } else {
            console.log(imprimir);
        }
    } 
}

//Función para determinar si el numero es divisible por 3
function esDivisiblepor3 (numero) {
    if (numero % 3 == 0 ) {
        return "Foo";
    } else {
        return "";
    }
}

//Función para determinar si el numero es divisible por 5
function esDivisiblepor5 (numero) {
    if (numero % 5 == 0 ) {
        return "Bar";
    } else {
        return "";
    }
}

//Función para determinar si el numero es divisible por 7
function esDivisiblepor7 (numero) {
    if (numero % 7 == 0 ) {
        return "Quix";
    } else {
        return "";
    }
}

//Función para determinar si los numeros 3, 5 y 7 forman parte del número
function contieneNum (numero){
    let cadena = "";
    let stringNum = numero.toString();
    for (let i = 0; i < stringNum.length; i++) {
        if(stringNum.charAt(i) == "3") {
           cadena += "Foo";
        } else if (stringNum.charAt(i) == "5"){
            cadena += "Bar";         
        } else if (stringNum.charAt(i) == "7"){
            cadena += "Quix";         
        }
    }
    return cadena;
}

primeraKata (1 );
primeraKata (2 );
primeraKata (3 );
primeraKata (4 );
primeraKata (5 );
primeraKata (6 );
primeraKata (7 );
primeraKata (8 );
primeraKata (9 );
primeraKata (10);
primeraKata (13);
primeraKata (15);
primeraKata (21);
primeraKata (33);
primeraKata (51);
primeraKata (53);
primeraKata (75);
primeraKata (175);