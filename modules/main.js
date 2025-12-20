import {  loadJSON , el} from "./lib.js";
import { showKarte } from "../modules/karte.js";

let dataForSave = null;
let cit ;
let localDate ;
el('#uhr').innerHTML = jetzt("Hamburg" , new Date() );


//const API_KEY = 'echte Key '; //################## API KEY
const API_KEY = import.meta.env.VITE_API_KEY;

 const weatherIcon = el('.weather-icon');
 const sprachebtn = el('#btnSprache');

//Sprache Wählen
let sprache = 'de';
sprachebtn.addEventListener("change", function() {
sprache = sprachebtn.options[sprachebtn.selectedIndex].value;
});
console.log(sprache);



export async function showWeather(cityName) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lang=${sprache}&appid=${API_KEY}&units=metric&q=${cityName}`;

    const data = await loadJSON(apiUrl);
    console.log(data);
    dataForSave= data ;
    console.log(dataForSave);

    if(data.cod == 404) {
        console.log('Fehler 404');
        el('.error').style.display = 'block';
        el('.weather').style.display = 'none';
    }else{
    el(".city").innerHTML = data.name;
    el(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    el(".humidity").innerHTML = data.main.humidity +"%";
    el(".wind").innerHTML = data.wind.speed + " Km/h";

    console.log(data.weather[0].main);

     if(data.weather[0].main == "Clouds")  {weatherIcon.src ="img/clouds.jpg";}
else if(data.weather[0].main == "Clear")  {weatherIcon.src ="img/clear.png";}
else if(data.weather[0].main == "Rain")  {weatherIcon.src ="img/rain.png";}
else if(data.weather[0].main == "Drizzle")  {weatherIcon.src ="img/drizzle.png";}
else if(data.weather[0].main == "Mist")  {weatherIcon.src ="img/mist.jpg";}

    el('.error').style.display = 'none' ;
    el('.weather').style.display = 'block' ;


    }
    const lon =  data.coord.lon;
    const lat = data.coord.lat
    showKarte(lat , lon);

    const timezoneOffsetHours = (data.timezone /3600)-1 ; // Zeitzone in Stunden aus 
    const localTimeInSeconds = Date.now()/ 1000 + timezoneOffsetHours * 3600;
    localDate = new Date(localTimeInSeconds * 1000); // Lokale Zeit in Millisekunden für Date-Konstruktor

    el('#uhr').innerHTML ='';
    el('#uhr').append( jetzt(data.name , localDate));

}


export  function jetzt(ort  , time){
    const now = time;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    return `${ort} :  ${formattedHours} :  ${formattedMinutes} : ${formattedSeconds}`;
    }

    export{cit , localDate}
    export { dataForSave };