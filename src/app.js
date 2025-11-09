import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función que genera la excusa aleatoria
function generarExcusa() {
  let quien = [
    "Mi gato filósofo",
    "El vecino misterioso del 4B",
    "Mi abuela gamer",
    "El repartidor de empanadas",
    "Un druida errante",
    "El algoritmo de YouTube",
    "Mi yo del futuro",
    "El gato de Schrödinger",
    "Un Jedi confundido",
    "El mismísimo Thanos"
  ];

  let accion = [
    "quemó",
    "hackeó",
    "extravió",
    "bendijo sin querer",
    "teletransportó",
    "rompió en mil dimensiones",
    "confundió con un NFT",
    "sacrificó al wifi",
    "invocó accidentalmente",
    "metió en un bucle temporal"
  ];

  let objeto = [
    "mi tarea",
    "mi laptop",
    "mi desayuno",
    "mi dignidad académica",
    "mi colección de memes",
    "mi certificado de asistencia",
    "mi sandwich de la suerte",
    "mi contraseña de Netflix",
    "mi cuaderno de ideas revolucionarias",
    "mi informe final"
  ];

  let momento = [
    "justo antes de clase",
    "mientras meditaba con Yoda",
    "cuando intentaba salvar el multiverso",
    "durante la siesta sagrada",
    "mientras Mercurio estaba retrógrado",
    "en pleno apagón existencial",
    "cuando Alexa me ignoró por completo",
    "en mi break de 5 minutos que duró 2 horas",
    "mientras el wifi luchaba por su vida",
    "cuando el destino decidió improvisar"
  ];

  let aleatorioQuien = quien[Math.floor(Math.random() * quien.length)];
  let aleatorioAccion = accion[Math.floor(Math.random() * accion.length)];
  let aleatorioObjeto = objeto[Math.floor(Math.random() * objeto.length)];
  let aleatorioMomento = momento[Math.floor(Math.random() * momento.length)];

  let excusa = `${aleatorioQuien} ${aleatorioAccion} ${aleatorioObjeto} ${aleatorioMomento}.`;

  document.getElementById("Excusa").innerHTML = excusa;
}

// Genera excusa al cargar página y al click del botón
window.onload = function() {
  generarExcusa();
  document.getElementById("botonExcusa").addEventListener("click", generarExcusa);
};
