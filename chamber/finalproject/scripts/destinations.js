import { showModal } from './modal.js';

const destinationsList = document.getElementById('destinations-list');

async function fetchDestinations() {
    try {
        const response = await fetch('data/destinations.json');
        if (!response.ok) throw new Error('Destinations fetch failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
    }
}

function displayDestinations(destinations) {
    destinationsList.innerHTML = '';
    destinations.forEach((dest, index) => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.setAttribute('data-grid-area', `card${index + 1}`);
        card.innerHTML = `
            <h3>${dest.name}</h3>
            <figure>
                <img src="images/${dest.image}" alt="${dest.name}" loading="lazy">
            </figure>
            <p><strong>Activity:</strong> ${dest.activity}</p>
        `;
        card.addEventListener('click', () => {
            showModal(dest.name, dest.description);
        });
        destinationsList.appendChild(card);
    });
}

async function init() {
    const destinations = await fetchDestinations();
    displayDestinations(destinations);

    // Store last viewed destination in localStorage
    destinationsList.addEventListener('click', (e) => {
        const card = e.target.closest('.destination-card');
        if (card) {
            const name = card.querySelector('h3').textContent;
            localStorage.setItem('lastViewedDestination', name);
        }
    });
}

init();