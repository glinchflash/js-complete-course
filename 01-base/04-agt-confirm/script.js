/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function info() {

    let age = window.prompt("How old are you?");
    let gender = window.prompt("Are you a boy or a girl?");
    let town = window.prompt("Where do you live?");

    let submit = confirm("is the following information correct?" + "age: " + age + " gender: " + gender + " town: " + town);

    if (submit === false){
        info();
    }
})();
