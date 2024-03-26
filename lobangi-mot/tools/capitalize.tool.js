const capitalizeTool = (str)=> {
    let firstLetter = str.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    str = str.slice(1);
    const strFinal = firstLetter + str;
    return strFinal;
}
module.exports = capitalizeTool;