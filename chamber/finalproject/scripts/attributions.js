const attributions = [
    { name: 'OpenWeather API', url: 'https://openweathermap.org/', type: 'API', description: 'Weather data provider' },
    { name: 'Leaflet', url: 'https://leafletjs.com/', type: 'Library', description: 'Map functionality' },
    { name: 'Unsplash', url: 'https://unsplash.com/', type: 'Images', description: 'Image source for Uganda landscapes' }
];

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('attributions-list');
    attributions.forEach(item => {
        const card = document.createElement('div');
        card.className = 'attribution-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.url}" target="_blank">${item.type}</a>
        `;
        list.appendChild(card);
    });
    localStorage.setItem('attributionsViewed', JSON.stringify(attributions.map(item => item.name)));
});