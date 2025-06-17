const API_KEY = '1bcc4a02834b961ed09302b43a019d6c';
const CITY = 'Kampala';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

document.addEventListener('DOMContentLoaded', () => {
    const weatherDataDiv = document.getElementById('weather-data');

    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Weather data fetch failed');
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherDataDiv.innerHTML = `
                Temperature: ${temperature}°C<br>
                Condition: ${description}
            `;
        })
        .catch(error => {
            console.error('Error fetching weble to load weather dather data:', error);
            weatherDataDiv.innerHTML = 'Unaata.';
        });
});