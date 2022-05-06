/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value
    const one = document.getElementById('op-one');
    const two = document.getElementById('op-two');

    var performOperation = function (operation) {
        const opOne = parseInt(one.value);
        const opTwo = parseInt(two.value);
        let result = 0;
        switch (operation) {
            case "addition":
                result = (opOne + opTwo);
                alert(result);
                break;
            case "substraction":
                result = (opOne - opTwo);
                alert(result);
                break;
            case "multiplication":
                result = (opOne * opTwo);
                alert(result);
                break;
            case "division":
                result = (opOne / opTwo);
                alert(result);
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();
