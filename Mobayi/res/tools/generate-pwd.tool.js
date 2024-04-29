// ? TODO à remplacer par un regex 
const charAccepted = "AZERTYUIOPMLKJHGFDSQWXCVBNazertyuiopmlkjhgfdsqwxcvbn0147852369/*-+.&()§!_$[]<>,;:=?£";

const pwdLength = 24;

export default function generatePassword(e){
    e.preventDefault();

    let password = '';

    for(let i=0; i < pwdLength; i++){
        const charIndex = Math.floor(Math.random() * charAccepted.length);
        password += charAccepted[charIndex];
    }

    console.log(password);
    input.value = password;
}

export default function togglePwdVisible(e){
    e.preventDefault();

    input.getAttribut("type") == "password" ? input.setAttribut("type", "text") : input.setAttribut("type", "password");
}