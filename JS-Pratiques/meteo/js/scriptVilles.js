const villesV2 = [
    { name: "Bruxelles", desc: "Capitale de l’Europe", url: "brussels.jpg" },
    { name: "Londres", desc: "Le melting pot anglais", url: "london.jpg" },
    { name: "Washington", desc: "Cité de la Maison Blanche", url: "washington.jpg" },
    { name: "Madrid", desc: "La Capitale du Royaume", url: "madrid.jpg" },
    { name: "Ottawa", desc: "Capitale du pays des Caribous", url: "ottawa.jpg" },
    { name: "Paris", desc: "La Ville Lumière", url: "paris.jpg" },
    { name: "Tokyo", desc: "Ville la plus peuplée du monde", url: "tokyo.jpg" },
    { name: "Rome", desc: "La ville aux sept collines", url: "rome.jpg" },
    { name: "Lisbonne", desc: "La cité aux mille couleurs", url: "lisboa.jpg" }
];


// dom
const tb_img_capital = document.querySelectorAll('.card__container img');
const tb_h2_capital = document.querySelectorAll('.card__container h2');
const tb_p_capital = document.querySelectorAll('.card__container p');
const btn_chercher = document.querySelectorAll('.card__container > .card');

// popup
const popupImg = document.getElementById('img-grand');
const popupH2 = document.getElementById('mon-titre');
const popupPara = document.getElementById('mon-texte');

const popupDate = document.getElementById('popoup-date');
const popupIcone = document.getElementById('popup-icone-temps');
const popupHumidite = document.getElementById('popup-humidite');
const popupTemperature = document.getElementById('popup-temperature');
const popupVent = document.getElementById('popup-vent');
const popupText = document.getElementById('popup-texte-temps');



// 
for (let index = 0; index < tb_img_capital.length; index++) {
    tb_img_capital[index].src = `./Capitales/${villesV2[index].url}`;
    tb_h2_capital[index].innerText = villesV2[index].name;
    tb_p_capital[index].innerText = villesV2[index].desc;
}


const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const Full_Popup = (date, icon, temp, vent, hum, texte) => {
    popupDate.innerText = date;
    popupIcone.src = `${icon}`;
    popupTemperature.innerText =temp;
    popupVent.innerText = vent;
    popupHumidite.innerText = hum;
    popupText.innerText = texte;
}



//-------------------------------------------
const Get_Src_img = (img, h2, p) => {
    popupImg.src = img;
    popupH2.innerText = h2;
    popupPara.innerText = p;
    document.querySelector('.img-container').style.display = "flex";
}

// close
document.getElementById('close-img').addEventListener('click', () => {
    document.querySelector('.img-container').style.display = "none";
})

// Event
btn_chercher.forEach((card) => {
    
    card.addEventListener('click', async (e) => {
        
        const img = card.childNodes[1].children[0].src;
        const p = card.childNodes[3].children[1].innerText;
        const h2 = card.childNodes[3].children[0].innerText;

        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${h2}&lang=fr`;

        try {
            const response = await fetch(url, options2);
            const result = await response.json();
            console.log(result.current);
            const icon = result.current.condition.icon;
            const hum = result.current.humidity;
            const date = result.current.last_updated;
            const temp = result.current.temp_c;
            const vent = result.current.wind_kph;
            const texte = result.current.condition.text;
            
            const mesImgs = Get_Src_img(`${img}`,`${h2}`,`${p}`);

            const displayPopup = Full_Popup(date, icon, temp, vent,hum, texte)
            
        } catch (error) {
            console.error(error);
        }
    })
    
})

