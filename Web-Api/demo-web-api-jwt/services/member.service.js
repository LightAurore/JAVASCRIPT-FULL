import { MemberDTO } from "../dto/member.dto.js";

const fakeData = {
    members : [
        {
            id: 1,
            username: 'test',
            password: 'azsq123.',
            role: 'user'
        },
        {
            id: 2,
            username: 'Della',
            password: 'azsq123=',
            role: 'user'
        },
        {
            id: 3,
            username: 'Balthy',
            password: 'azsq123.',
            role: 'admin'
        },
        
    ]
}


const memberService = {
    login: (username, password) =>{

        const member = fakeData.members.find(m => m.username === username && m.password === password)

        return !!member ? new MemberDTO(member) : null;
    }
};

export default memberService;