import { el , create , loadHTML } from "./lib.js";
import { db } from "./local-storage.js";




export function saveData(data , saveName){             
    const id = Date.now();
    const name = data.name;
   
    const speedy = data.wind.speed;
    const hum = data.main.humidity;
    
    
    const weatherObj ={            //dise Objekt wird gespeichert
    id: saveName,
    city : name ,
    speedy : speedy ,
    hum : hum
    }
    db.setItem(weatherObj);               
    console.log('gespeichert');
    el('#hiddenText').append('Gespeichert');
    
    }




export async  function showData(){

   const btnLog = el('#neupageid');
    btnLog.innerText ='';
    btnLog.className ='area-aktiv';
    const data =  db.readAllItems();
    console.log(data);
    btnLog.append(divErsteller(data));

}



 function divErsteller(data) {

   const wrap = create('div');

   console.log(data.length);

if(data.length){
        const divBig = create('div');
        divBig.className = 'bigcontainer';
        

        
divBig.innerHTML =`<span>Name</span><span>Feuchtigkeit</span><span>Windgeschwindigkeit</span><span></span>`; 

 wrap.append(divBig);
}
   
   
    data.forEach((ele) => {

        const divBig = create('div');
        divBig.className = 'bigcontainer';
        divBig.setAttribute('data-key', ele.id);

        console.log( divBig.getAttribute('data-key'));
        
        
        //span für city name
         let span = create('span');
        span.innerHTML = ` ${ele.city}`;
        span.className ='span';
        divBig.append(span);


        //span für hum
        span = create('span');
        span.innerHTML = `${ele.hum}` ;
        span.className ='span';
        divBig.append(span);


        //span für Windgeschwindigkeit
        span = create('span');
        span.innerHTML =`    ${ele.speedy}`;
        span.className ='span';
        divBig.append(span);


        //span für lösch Button
        let loschbtn = create('span'); 
        loschbtn.innerHTML =`<i class="material-icons" >delete</i>`; 
        loschbtn.addEventListener('click', function () {
        localStorage.removeItem(this.id);
        this.closest('.bigcontainer').remove();
                


        console.log( divBig.getAttribute('data-key'));
        const key = divBig.getAttribute('data-key');
        db.deleteItem(key);
        el('#item-wrapper').removeChild(this.parentNode);
  
        });

          divBig.append(loschbtn);
          wrap.append(divBig);
          
    });
    return wrap ; 

}























