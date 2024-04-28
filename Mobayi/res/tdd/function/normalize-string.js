
const secret = "esdfvgtyjkug"

const alphanumcar = "aqwxszedcvfrbgtyhnjuiklmpoZAQSXWCVFDERTYHGBNUJKIPMLO123654789αβγδ εζηθικλμνξοπρστυφχψωABΓ∆EZHΘIKΛMNΞOΠPΣTΥΦXΨΩ㋡®©™«»№ღ♡წ❥★☆۝۞۩♂♀■□∆∇▲►▼◄◣◢◤◥◆◇〓●☼♪♫✪✱✿❀屮ஐ₪✎░▒▒▓█▌❘中食҈ஊஏｼㇱ☋︵︶︽︾︿﹀〘〙〚〛《》｟｠坤埉垞坊在坤〩【】〖〗〄々➨➲➜➢『』〠〣✽✻✸♞♘♜♖♛♕➀➁➂➃➄➅➆➇➈➊➋➌➍➎➏➐➑➒☒☨☩☫☬☭✓✗✜✪✯✰✱✲✵✶✻✼✽✾✿❀❁❂❃❆❈❊❋❖❢❦ﷺﷻﷹﷲஇ௫నഏ໘჻⁂҂৩৬ੴઈઊணఏ໙‰←↑→↓⇄⇅⇆↺↻↣↤↥↦↧↰↱↲↳↴↵♃♄♅♆♇"

function normalizeString(str = "hello world !"){
    const hashStr = "";
    let  i;
    let h = "";
    const length = str.length;
    console.log(length, str[247]);

    for(i = 0; i < length; i++){
        // console.log(i, str[i]);
        let car = +(str.charCodeAt(i) + secret.charCodeAt((i < secret.length) ? (i) : i % secret.length));
        
        let modulo = alphanumcar.length >= (car) ? car :(car) %  alphanumcar.length;

        h = hashStr.concat(h,alphanumcar[modulo]);
    }

    console.log(h)
    return h;
}


const str = "Depuis le temps que nous partageons notre amour sans aucun nuage, je me suis rendu compte à quel point tu comptais pour moi. C'est à tes côtés que je veux construire ma vie, que nous avancions main dans la main. Veux-tu devenir ma femme/mon mari ? Chacun des kilomètres qui nous séparent me donne de la force pour tenir. Tu es loin de moi, mais l\'amour me donne des ailes pour faire face à la distance qui nous sépare. Notre amour ne connaît pas de limites, nous vivrons ensemble des jours heureux, car je t'aime."


let machin = normalizeString(str);

function alizeString(machin){
    const hashStr = "";
    let  i;
    let h = "";
    const length = machin.length;
    console.log(length, machin[247]);

    for(i = 0; i < length; i++){
        let j = alphanumcar.indexOf(machin[i]);
        let k = j - secret.charCodeAt((i < secret.length) ? (i) : i % secret.length);
        let alpha = String.fromCharCode(k);
        h = hashStr.concat(h,alpha);
    }
    console.log(h)
    return h;
}

alizeString(machin);