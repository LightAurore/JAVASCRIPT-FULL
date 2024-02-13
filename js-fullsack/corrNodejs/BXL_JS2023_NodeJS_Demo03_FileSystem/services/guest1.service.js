'use strict';

const fs = require('fs');

function addGuest({ firstname, lastname }) {

    if (!firstname || !lastname || firstname.trim() === '' || lastname.trim() === '') {
        return Promise.reject('Invalid Data');
    }

    return new Promise((resolve, reject) => {

        const data = firstname + ' ' + lastname + '\n';

        fs.writeFile('data/guest.fred', data, { encoding: 'utf8', flag: 'a' }, (error) => {

            if(error) {
                return reject(error.message);
            }
            
            console.log('Ecriture OK');
            resolve();
        });
    });
}

function getGuests() {
    return new Promise((resolve, reject) => {

        fs.readFile('data/guest.fred', { encoding: 'utf8' }, (error, data) => {

            if(error) {
                return reject(error.message);
            }

            const result = [];
            for(const line of data.trimEnd().split('\n')) {

                const [firstname, lastname] = line.split(' ');
                result.push({
                    firstname, lastname
                });

            }
            resolve(result);
        });
    });
}


const guestService = {
    addGuest,
    getGuests
};
module.exports = guestService;