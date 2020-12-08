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
