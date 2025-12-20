
import { showWeather} from "../modules/main.js";
import { el } from "../modules/lib.js";
import {showData} from "../modules/lesen-speichern.js";
import { showLoadWeb , showSaveWeb} from "../modules/htmlLoad.js";


 function searchWeather() {
    const cityName =el('#cityName').value;
    showWeather(cityName);
}



el('#searchbtn').addEventListener('click', searchWeather);
el('#cityName').addEventListener('keydown',  function(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

el('#btnSave').addEventListener('click', showSaveWeb);
el('#btnShow').addEventListener('click', showLoadWeb);
el('#btnExtra').addEventListener('click', showData);


