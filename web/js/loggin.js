"use strict";
import { messageRenderer } from "/js/renderers/messages.js";
// si no le asocias el script al código pricipal nunca va a funcionar


/* function handler1() {
    alert("Sus datos estarán almacenados con seguridad !");
} */

/*function handler2() {
    const rndCol = 'rgb(' + 255 * Math.random(255) + ',' + 2
    55 * Math.random(255) + ',' + 255 * Math.random(255) + ')';

    document.body.style.backgroundColor = rndCol;

} */

function fun1(event) {
    event.preventDefault();
    let formo = event.target;
    let formData = new FormData(formo);
    let nombre = formData.get("nombre");
    let errors = [];


    if (nombre.length < 3) {
        let errorDv = document.getElementById("errors");
        errorDv.innerHTML = "";
        errors.push("el nombre debe ser mayor que 3");
        console.log(errors);
        messageRenderer.showErrorMessage(errors);

    }

}


function main() {
    //primero accedemos al evento que que va a casuar un evento
    //    let obj = document.getElementById("nombre");
    //    obj.addEventListener("click", handler1);

    /*  let obj2 = document.getElementById("envio");
      obj2.addEventListener("click", handler2); */
    let registerForm = document.getElementById("formul-1");
    registerForm.onsubmit = fun1;
}




document.addEventListener("DOMContentLoaded", main);




