

function hashPassword(pwd){

    const pwdArray = pwd.split('');
    let pwdUTF16 = [];
    const length = pwd.length;
    const asymKey = length^2;
    let i =0;
    for(char in pwdArray){
        pwdUTF16 = [...pwdUTF16, ((char.charCodeAt(0)) << ((i + 1)  + asymKey))];
        console.log((char.charCodeAt(0)));
        i++;
    }
    console.log(pwdUTF16);
    let hashedPwd = []
    for (char of pwdUTF16) {
        // console.log(char);
        hashedPwd = [...hashedPwd, String.fromCharCode(char)];
    }

    console.log(hashedPwd.join(''));
}

hashPassword('aaaa')
hashPassword('bbbb')
hashPassword('cccc')
hashPassword('brt651:bgbtrgb')