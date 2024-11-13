/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = ['Alvaro', 'Hector', 'Adrian', 'Carmen'];
  let action = ['comió', 'destrozó', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el coche'];
  let when = ['antes de la clase', 'mientras codificaba en bootstrap', 'mientras hacía el generador de excusas', 'durante mi almuerzo', 'mientras rezaba'];

  
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  // Concatenar las partes para formar la excusa completa
  const randomExcuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  // Establecer la excusa generada en el elemento HTML con id="excuse"
  document.getElementById('excuse').innerHTML = randomExcuse;
}


window.onload = generateExcuse;
