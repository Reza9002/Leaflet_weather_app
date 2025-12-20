

export const db = {

    getItem: function(key) {
        // 1 key wird ausgelesen
        const data = localStorage.getItem(key);
        return JSON.parse(data); // JSON parse, da Array/Obj ausgelesen werden soll
    }, 
    
    setItem: function(data) {
        const key = data.id
        const temp = JSON.stringify(data); // stringify damit auch wirklich ein arr gespeichert wird
        localStorage.setItem(key, temp);
    },
    deleteItem: function(key) {
        localStorage.removeItem(key)

    },
    readAllItems: function() {
        // array mit allen Keys
        const keys = Object.keys(localStorage) 
        // array mit allen Datenobjekten
        const items = keys.map((key) => db.getItem(key));
        return items;
    }

}