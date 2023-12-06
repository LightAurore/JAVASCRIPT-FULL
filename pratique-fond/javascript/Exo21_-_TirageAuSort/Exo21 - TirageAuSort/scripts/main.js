/**Version 1

const html_participants = document.getElementById('participants');

const participants = [
    "Soukaina",
    "Richelle",
    "Billy",
    "Alain",
    "Yassin",
    "Sami",
    "Timothy",
    "Hoa",
    "Iegor"];
    
let random = Math.round(Math.random()*(participants.length-1));
let gagnant = participants[random];
// alert(`Le gagnant est ${gagnant}!`);


// Même boucle que la for...of...
// for (let i = 0; i < participants.length; i++) {
//     const participant = participants[i];
//      ...instructions...
// }

for (const participant of participants) {
    const html_tr = document.createElement('tr');
    const html_td = document.createElement('td');
    if(participant == gagnant) html_td.id="gagnant";
    html_tr.appendChild(html_td);
    html_participants.appendChild(html_tr);
    html_td.innerText = participant;
}

*/

/** Version 2 */

const html_participants = document.getElementById('participants');

const participants = [
    "Soukaina",
    "Richelle",
    "Billy",
    "Timothy",
    "Alain",
    "Yassin",
    "Sami",
    "Timothy",
    "Hoa",
    "Iegor"];
    
let random = Math.round(Math.random()*(participants.length-1));

for (const i in participants) {
    const participant = participants[i];
    const html_tr = document.createElement('tr');
    const html_td = document.createElement('td');
    html_tr.appendChild(html_td);
    html_participants.appendChild(html_tr);
    html_td.innerText = participant;
    html_td.classList.add(`participant_${i}`);
}

// const html_tds = document.querySelectorAll('#participants td');

// for (let i = 0; i < html_tds.length; i++) {    
//     if(i == random) {
//         html_tds[i].id="gagnant";
//     }
// }

const html_gagnant = document.querySelector(`td.participant_${random}`).id="gagnant";