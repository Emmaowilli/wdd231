// Fetch weather data for Kampala using OpenWeather API
const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your API key
const weatherDiv = document.getElementById('weather-data');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kampala,UG&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Weather fetch failed');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherDiv.innerHTML = '<p>Unable to load weather data.</p>';
    }
}

function displayWeather(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    weatherDiv.innerHTML = `
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${description}</p>
        <p>Humidity: ${humidity}%</p>
    `;
}

fetchWeather();