const form = document.querySelector('.form');
const valueiInput = document.querySelector('#input-letra');

let divAhorcado = document.querySelector('.ahorcado-img');

const vector = ["MARIPOSA" , "GOKU", "CHIKISTRIKIS","ASISEHACE",
                "PAPAGAYO", "CELULAR", "CARGADOR","TRIPODE",
                "EEG","UNIVERSIDAD", "CODIGO", "JAVASCRIPT",
                "CBAZCODE"];

//Variables globales
let palabraEnJuego;
let letra;
let comenzamos;
let indiceRandom;

//Vector
let vectorLetrasEncontradas = [];


//Banderas
let estaJugado = false;
let encontrado =false;
let primeraVez = true;

//Contadores
let contadorFallos = 0;
let contadorLetrasMostradas = 0;





const generarPalabra = () =>{
      indiceRandom = obtenerNumeroRandom(0,(vector.length-1));
      console.log(indiceRandom);
      palabraEnJuego = vector[indiceRandom];
      estaJugado = true;
      creadorLetras(palabraEnJuego);
}

const obtenerNumeroRandom= (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}

const creadorLetras = (palabra) => {
    console.log("creando ...",palabra);
    const contenedorPrincipal = document.querySelector('.contenedor-principal');
    const contenedorPalabra = document.querySelector('.contenedor-palabra');

    let contenedorTamano = document.createElement("div");
    contenedorTamano.classList.add('title');
    contenedorTamano.innerHTML = `El tamaño de la palabra es ${palabra.length}`
    contenedorPrincipal.insertBefore(contenedorTamano, contenedorPalabra);

    for(i = 0; i < palabra.length; i++){
        let contenedorLetraGuion = document.createElement("div");      
        let contenedorLetra = document.createElement("div");
        let contenedorGuion = document.createElement("div");

        contenedorLetra.classList.add('letra');
        contenedorGuion.classList.add('guion');
        contenedorLetraGuion.classList.add('letra-guion');
        
        contenedorLetra.innerHTML = palabra[i];
        
       
        contenedorLetraGuion.appendChild(contenedorLetra);
        contenedorLetraGuion.appendChild(contenedorGuion);

        contenedorPalabra.appendChild(contenedorLetraGuion);
        
    }
}