/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    document.getElementById('pass-one').minLength = '8';
    document.getElementById('pass-one').addEventListener('input', () => {
        let password = document.getElementById('pass-one').value;
        if (password.length < 8) {
            document.getElementById('validity').innerHTML = "Password lenght must be atleast 8 characters"
        } else if (!/(?=.*\d*2)/.test(password)) {
            document.getElementById('validity').innerHTML = 'Password has to contain atleast 2 numbers';
        } else {
            document.getElementById('validity').innerHTML = 'Ok';
        }
    })
})();
