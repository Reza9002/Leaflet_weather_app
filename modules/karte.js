
let map = null;
let marker = null;

export function showKarte(lon, lat) {
    
    if (!map) {
        map = L.map('map').setView([lon, lat], 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker([lon, lat]).addTo(map);
    } else {
        marker.setLatLng([lon, lat]);
        map.setView([lon, lat]);
    }
}
