/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        for (i = 1; i <= 21; i++){
            let result = i * i;
            /*if (result < 21){*/ /*activating this will give perfect square numbers between 1 and 21*/
                console.log(result);
                alert(result);
            /*}*/

        }

    });

})();
