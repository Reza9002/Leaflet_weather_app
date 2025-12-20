import { saveData, showData } from "./lesen-speichern.js";
import { el , loadHTML } from "./lib.js";
import { dataForSave } from "./main.js";



const extraArea = el('#extraArea');

export async function showLoadWeb(){
   
    extraArea.innerHTML = '';
    extraArea.className = 'newpage-aktiv';
    const data = await loadHTML('data/load.html');
    extraArea.innerHTML = data;
    
    // abbrechen Button
    el('#abbrechen').addEventListener('click',function(){
        extraArea.innerHTML = '';
        extraArea.className= 'area-passiv';
        el('#map').style.display = 'block';
    });

    showData();

  if (map) {  el('#map').style.display = 'none';  }


}




export async function showSaveWeb(){

    extraArea.innerHTML = '';
    extraArea.className = 'newpage-aktiv';
    const data = await loadHTML('data/speichern.html');
    extraArea.innerHTML = data;

    // abbrechen Button
    el('#abbrechen').addEventListener('click',function(){
        extraArea.innerHTML = '';
        extraArea.className= 'area-passiv';
        el('#map').style.display = 'block';
        
    });

    el('#landspeichern').addEventListener('click', function() {
        const saveName = el('#speicherName').value ;
       
        saveData(dataForSave , saveName);
        el('#map').style.display = 'none';
        
        
    });
    if (map) {  el('#map').style.display = 'none'; } 

}