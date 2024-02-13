'use strict';
const guestService = require("./services/guest1.service");

(async function () {

    await guestService.addGuest({ firstname: 'Della', lastname: 'Duck' });
    await guestService.addGuest({ firstname: 'Zaza', lastname: 'Vanderquack' });


    const people = await guestService.getGuests();
    console.log('Liste des invités : ');
    for (const person of people) {
        console.log(`- ${person.firstname} ${person.lastname}`);
    }
})();