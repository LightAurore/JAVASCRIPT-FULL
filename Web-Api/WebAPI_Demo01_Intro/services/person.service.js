import { PersonDetailDTO, PersonListDTO } from '../dto/person.dto.js';

// Fake Data -> Object JS (Permet de stocker les données en mémoire)
const fakeData = {
    people: [
        {
            personId: 1,
            email: 'della.duck@digitalcity.brussels',
            firstname: 'Della',
            lastname: 'Duck',
            confirm: true,
            nbGuest: 4
        },
        {
            personId: 2,
            email: 'balthazar.picsou@digitalcity.brussels',
            firstname: 'Balthazar',
            lastname: 'Picsou',
            confirm: false,
            nbGuest: null
        },
        {
            personId: 4,
            email: 'miss.tick@digitalcity.brussels',
            firstname: 'Miss Tick',
            lastname: 'De Sortilege',
            confirm: true,
            nbGuest: 1
        }
    ],
    nextId: 5
}

const personService = {

    getAll: async () => {
        return fakeData.people.map(p => new PersonListDTO(p));
    },

    getById: async (id) => {
        const person = fakeData.people.find(p => p.personId === id);

        return (!!person) ? new PersonDetailDTO(person) : null;
        /*/
        {
            // égale à 
            if(person){
                return new PersonDetailDTO(person)
            }
            return null;
        }
        */
    },

    add: async (person) =>{
        const personAdded = {
            ...person,
            nbGuest : person.confirm ? person.nbGuest : null,
            personId: fakeData.nextId,
        }

        fakeData.people.push(personAdded);

        fakeData.nextId++;

        return new PersonDetailDTO(personAdded);
    },

    update: async(personId, data) => {
        const personTarget = fakeData.people.find(p => p.personId === personId);

        if(!personTarget){
            return false;
        }

        personTarget.email = data.email;
        personTarget.firstname = data.firstname;
        personTarget.lastname = data.lastname;
        personTarget.confirm = data.confirm;
        personTarget.nbGuest = data.confirm ? data.nbGuest : null;

        return true;
    },

    delete: async (personId) => {
        const index = fakeData.people.findIndex(p => p.personId === personId);

        if(!index){
            return false;
        }

        fakeData.people.splice(index, 1);
        return true;
    }

};

export default personService;