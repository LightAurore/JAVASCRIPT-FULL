'use strict';

const fs = require('fs/promises');

async function addGuest({ firstname, lastname }) {

    if (!firstname || !lastname || firstname.trim() === '' || lastname.trim() === '') {
        throw new Error('Invalid Data');
    }

    const data = firstname + ' ' + lastname + '\n';

    await fs.writeFile('data/guest.fred', data, { encoding: 'utf8', flag: 'a' });
    console.log('Ecriture OK');
}

async function getGuests() {

    const data = await fs.readFile('data/guest.fred', { encoding: 'utf8' });

    const result = [];
    for (const line of data.trimEnd().split('\n')) {
        const [firstname, lastname] = line.split(' ');
        result.push({
            firstname, lastname
        });
    }
    return result;
}

const guestService = {
    addGuest,
    getGuests
};
module.exports = guestService;