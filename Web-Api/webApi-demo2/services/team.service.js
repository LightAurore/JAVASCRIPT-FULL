//* fakeData → Replace by database

import { TeamDTO } from "../dto/team.dto.js";


const fakeData = {
    teams: [
        {
            id: 1,
            teamname: 'Team 1',
            sport: 'Football',
            periods: 'quarter',
            players: [
                {
                    id: 1,
                    email: '<EMAIL>',
                    firstname: 'John',
                    lastname: 'Doe'
                }
            ]
        },
        {
            id: 2,
            teamname: 'Team 2',
            sport: 'Basketball',
            periods: 'quarter',
            players: [
                {
                    id: 2,
                    email: '<EMAIL>',
                    firstname: 'Jane',
                    lastname: 'Doe'
                }
            ]
        }
    ]
}




// ? Service
const teamService = {
    getAll: async () =>{
        const teams = fakeData.teams.slice();

        const teamMap = teams.map(team => new TeamDTO(team));

        return teamMap;
    },

    get: async (id) =>{
        const team = fakeData.teams.find((t) => t.id === id);
        console.log(team);

        const dtoTeam = !!team ? new TeamDTO(team) : null;
        console.log(dtoTeam);

        return dtoTeam;
    },

    add: async (data) => {
        if(fakeData.teams.some(t => t.id === data.id)){
            throw new Error("Teams already exists")
        }

        fakeData.teams.push(data);
        
        return new TeamDTO(data);
    },

    update: async (id, data) =>{
        const team = fakeData.teams.find(t => t.id === id);

        if(!team){
            throw new Error('Team not found');
        }
        
        team.teamname = data.teamname;
        team.sport = data.sport;
    },

    delete: async (id) =>{
        const index = fakeData.teams.findIndex(t => t.id === id);

        if(!teams[index]){
            throw new Error('Team not found');
        }

        try {
            await teams.slice(index, 1);
            return new TeamDTO(teams);
        } catch (error) {
            throw new Error('Team not deleted');
        }
    },

    addPlayer: async (player, team) =>{
        return;
    },
    
    removePlayer: async (id, data) =>{
        return;
    }
}

export default teamService;