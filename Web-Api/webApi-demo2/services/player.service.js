// FakeData → Replace by database

import { PlayerDTO } from "../dto/player.dto.js";

const fakeData = {
    players: [
        {
        email: 'della.duck@digitalcity.brussels',
        firstname: 'Della',
        lastname: 'Duck'
        }
    ]
}


// ? Service
const playerService = {
    get: async (email) => {
        console.log(fakeData.players);

        const player = fakeData.players.find(p => p.email === email);

        return !!player ? new PlayerDTO(player) : null;
    },

    add: async (data) =>{
        if(fakeData.players.some(p => p.email === data.email)){
            throw new Error('Email already exists');
        }

        fakeData.players.push(data);

        return new PlayerDTO(data);
    },

    update: async (email, data) =>{
        const player = fakeData.players.find(p => p.email === email);

        if(!player){
            throw new Error('Player not found');
        }
        
        player.firstname = data.firstname;
        player.lastname = data.lastname;
    },

};

export default playerService;