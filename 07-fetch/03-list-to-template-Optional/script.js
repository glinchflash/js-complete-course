/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        //fetch api and link to js
        fetch("../../_shared/api.json")
            .then(res => res.json())
            .then(data => {
                //get template and link to js
                const template = document.getElementById("tpl-hero");
                //get data from api and do following commands for each hero listed in api
                data.heroes.forEach(hero => {
                    //clone template
                    const clone = template.content.cloneNode(true);
                    //fill in template with data grom api
                    const name = clone.querySelector(".name");
                    const alterEgo = clone.querySelector(".alter-ego");
                    const power = clone.querySelector(".powers");
                    //write/fill template
                    name.innerText = hero.name;
                    alterEgo.innerText = hero.alterEgo;
                    power.innerText = hero.abilities.join(', ');

                    document.getElementById("target").appendChild(clone);

                });
            });
    });
})();
