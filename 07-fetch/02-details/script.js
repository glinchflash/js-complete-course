/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        //linking api to js
        fetch("../../_shared/api.json")
            .then(res => res.json())
            .then(data => {
        //get id from api and import information to js
                const heroId = +document.getElementById("hero-id").value;
                const hero = data.heroes.find(x => x.id ===heroId);
                console.log(hero);
        //get template and clone it's content (template.content.cloneNode)
                let template = document.getElementById('tpl-hero');
                let clone = template.content.cloneNode(true);
        //link name,alter-ego and power to cloned template
                const name = clone.querySelector(".name");
                const alterEgo = clone.querySelector(".alter-ego");
                const power = clone.querySelector(".powers");
        //write/fill template
                name.innerText = hero.name;
                alterEgo.innerText = hero.alterEgo;
                power.innerText = hero.abilities.join(', ');
        //implement "cloned template" into "target"
                document.getElementById("target").appendChild(clone);
            });
    });
})();
