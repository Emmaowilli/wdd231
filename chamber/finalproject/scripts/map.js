// Initialize Leaflet map
import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

const map = L.map('map').setView([0.3476, 32.5825], 7); // Center on Kampala

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add markers for destinations
const destinations = [
    { name: "Bwindi Impenetrable Forest", lat: -1.0645, lon: 29.6649 },
    { name: "Queen Elizabeth National Park", lat: -0.1833, lon: 30.0000 },
    { name: "Lake Bunyonyi", lat: -1.2833, lon: 29.9333 }
];

destinations.forEach(dest => {
    L.marker([dest.lat, dest.lon]).addTo(map)
        .bindPopup(`<b>${dest.name}</b>`);
});