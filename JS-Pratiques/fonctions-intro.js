'use strict';

/**
 * Afficher une card qui prend des infos utilisateur en paramètre
 * @param {string} firstname
 * @param {string} lastname
 * @param {Date} birthday
 * @param { ...string} hobbies
 * @returns { ovoid }
 */

function showCard(firstname, lastname, birthday, ...hobbies){
    let msg = `
        <div>
            <h2>${firstname} - ${lastname}  </h2>
            <p>
                ${birthday.toLocaleDateString}
            </p>
            <p>
                ${hobbies.join(" - ")}
            </p>
        </div>
    `
}