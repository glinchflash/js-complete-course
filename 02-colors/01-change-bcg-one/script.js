/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let btnred = document.getElementById("red");
    let btngreen = document.getElementById("green");
    let btnyellow = document.getElementById("yellow");
    let btnblue = document.getElementById("blue");

    btnred.addEventListener("click", bgtored);
    btngreen.addEventListener("click", bgtogreen);
    btnyellow.addEventListener("click", bgtoyellow);
    btnblue.addEventListener("click", bgtoblue);

    function bgtored(){
        document.body.style.backgroundColor = "red";
    }
    function bgtogreen(){
        document.body.style.backgroundColor = "green";
    }
    function bgtoyellow(){
        document.body.style.backgroundColor = "yellow";
    }
    function bgtoblue(){
        document.body.style.backgroundColor = "blue";
    }
})();
