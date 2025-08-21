import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let quien = ["Un duende", "El vecino", "Mi hermano", "Un fantasma", "El presidente"];
  let verbo = ["destruyó", "escondió", "hizo desaparecer", "me quitó", "saboteó"];
  let que = ["las llaves", "el informe", "el documento", "la presentación", "el dinero"];
  let cuando = ["ayer en la noche.", "mientras dormía.", "justo antes de salir.", "hace un momento.", "en la madrugada."];


  function excusa() {
    let quien_random = quien[Math.floor(Math.random() * 5)];
    let verbo_random = verbo[Math.floor(Math.random() * 5)];
    let que_random = que[Math.floor(Math.random() * 5)];
    let cuando_random = cuando[Math.floor(Math.random() * 5)];

    let oracion = `${quien_random} ${verbo_random} ${que_random} ${cuando_random}`;

    return oracion;
  }

  console.log(excusa());


  console.log("Hello Rigo from the console!");
};

