const argon2 = require('argon2');
const Member = require("../models/member.model");

const memberService = {
    usernameExists: async (username)=>{
        const memberTarget = await Member.findOne({username});

        console.log(memberTarget);

        return memberTarget !== null
    },

    // Récupère les éléments du formulaire via le model schema de mongoose
    register: async ({username, firstname, lastname, password})=>{
        // Hashage du mot de passe
        const pwdHash = await argon2.hash(password);

        const memberCreated = new Member({
            username, 
            firstname, 
            lastname, 
            password : pwdHash
        })


        await memberCreated.save();

        return memberCreated;
    },

    login: async ({username, password}) => {
        
        const member = await Member.findOne({ username });
        if(!member) {
            return null;
        }
        // Vérifier si le mot de passe est correct
        const pwdIsValid = await argon2.verify(member.password, password);
        if(!pwdIsValid) {
            return null;
        }

        return member;
    }
}

module.exports = memberService;