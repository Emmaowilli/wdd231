// Handle form submission and display data
document.addEventListener('DOMContentLoaded', () => {
    const formDataDiv = document.getElementById('form-data');
    if (formDataDiv) {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name') || 'N/A';
        const email = urlParams.get('email') || 'N/A';
        const destination = urlParams.get('destination') || 'N/A';
        const message = urlParams.get('message') || 'N/A';

        formDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Preferred Destination:</strong> ${destination}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    }
});