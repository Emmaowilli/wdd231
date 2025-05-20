document.addEventListener('DOMContentLoaded', async () => {
    const weatherDataDiv = document.getElementById('weather-data');
    const spotlightContainer = document.getElementById('spotlight-container');

    // OpenWeatherMap API Key (replace with your own key)
    const apiKey = 'e7a77ec7afde1c250f180c0e0051e4d3';
const city = 'Kampala';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},UG&appid=${apiKey}&units=metric`;

async function fetchWeather() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Weather data fetch failed');
            const data = await response.json();
            const current = data.list[0];
            const forecast = [data.list[8], data.list[16], data.list[24]];

            const today = new Date();
            const forecastDates = forecast.map((item, index) => {
                const date = new Date(today);
                date.setDate(today.getDate() + index + 1);
                return date.toLocaleDateString('en-US', { weekday: 'short' });
            });

            weatherDataDiv.innerHTML = `
                <p>Current Temperature: ${current.main.temp}°C</p>
                <p>Weather: ${current.weather[0].description}</p>
                <h3>3-Day Forecast</h3>
                <p>${forecastDates[0]}: ${forecast[0].main.temp}°C</p>
                <p>${forecastDates[1]}: ${forecast[1].main.temp}°C</p>
                <p>${forecastDates[2]}: ${forecast[2].main.temp}°C</p>
            `;
        } catch (error) {
            console.error('Error fetching weather:', error);
            weatherDataDiv.innerHTML = '<p>Weather data unavailable</p>';
        }
    }

    // Display static spotlight members using provided image links
    function displaySpotlights() {
        const spotlightMembers = [
            {
                name: 'Green Energy Uganda',
                address: 'Plot 45, Jinja Road, Kampala',
                phone: '+256 700 111 222',
                website: 'https://greenenergy.ug',
                membershipLevel: 'Gold',
                image: 'green-energy.jpg'
            },
            {
                name: 'Kampala Tech Solutions',
                address: 'Kira Road, Kampala',
                phone: '+256 772 333 444',
                website: 'https://kampalatech.ug',
                membershipLevel: 'Silver',
                image: 'kampala-tech.jpg'
            },
            {
                name: 'Nile Breweries',
                address: 'Luzira Industrial Area, Kampala',
                phone: '+256 414 123 456',
                website: 'https://nilebreweries.ug',
                membershipLevel: 'Gold',
                image: 'nile-breweries.jpg'
            }
        ];

        spotlightContainer.innerHTML = '';

        spotlightMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p class="membership">Membership: ${member.membershipLevel}</p>
            `;
            spotlightContainer.appendChild(card);
        });
    }

    fetchWeather();
    displaySpotlights();
});

