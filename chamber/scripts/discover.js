document.addEventListener('DOMContentLoaded', async () => {
    const cardsContainer = document.getElementById('discover-cards');
    const visitMessage = document.getElementById('visit-message');

    async function fetchDiscoverData() {
        try {
            const response = await fetch('data/discover.json');
            if (!response.ok) throw new Error('Discover data fetch failed');
            return await response.json();
        } catch (error) {
            console.error('Error fetching discover data:', error);
            return [];
        }
    }

    function displayCards(data) {
        cardsContainer.innerHTML = '';
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'discover-card';
            card.setAttribute('data-grid-area', `card${index + 1}`);
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="images/${item.image}" alt="${item.name}" loading="lazy">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            cardsContainer.appendChild(card);
        });
    }

    function displayVisitMessage() {
        const lastVisit = localStorage.getItem('lastVisit');
        const currentVisit = Date.now();
        const oneDayInMs = 24 * 60 * 60 * 1000;

        if (!lastVisit) {
            visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
        } else {
            const daysBetween = Math.floor((currentVisit - lastVisit) / oneDayInMs);
            if (daysBetween < 1) {
                visitMessage.textContent = 'Back so soon! Awesome! 😊';
            } else {
                visitMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? 'day' : 'days'} ago.`;
            }
        }

        localStorage.setItem('lastVisit', currentVisit);
    }

    const discoverData = await fetchDiscoverData();
    displayCards(discoverData);
    displayVisitMessage();
});
