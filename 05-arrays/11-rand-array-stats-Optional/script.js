/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click" , () =>{
        let randomArray = Array(10).fill().map(()=> Math.floor(Math.random()* 100));
        randomArray.forEach( (number, index) => {
            let i = index + 1 ;
            document.getElementById(`n-${i}`).innerHTML = number ;
        });
        /*---- Min number ----*/
        document.getElementById('min').innerHTML = randomArray.reduce((a , b) => Math.min(a,b));
        /*----Max number ----*/
        document.getElementById('max').innerHTML = randomArray.reduce((a,b) => Math.max(a,b));
        /*----- sum ---------*/
        let sum = randomArray.reduce(function (previousValue,currentValue) {
             return previousValue + currentValue;
        })
        document.getElementById('sum').innerHTML = sum;

        /*----- avg ---------*/
        document.getElementById('average').innerHTML = sum / randomArray.length;

    });

})();