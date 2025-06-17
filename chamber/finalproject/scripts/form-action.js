document.addEventListener('DOMContentLoaded', () => {
    const formDataDiv = document.getElementById('form-data');
    if (formDataDiv) {
        const urlParams = new URLSearchParams(window.location.search);
        const data = {
            name: urlParams.get('name') || 'N/A',
            email: urlParams.get('email') || 'N/A',
            destination: urlParams.get('destination') || 'N/A',
            message: urlParams.get('message') || 'N/A'
        };
        localStorage.setItem('lastFormSubmission', JSON.stringify(data));
        formDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Preferred Destination:</strong> ${data.destination}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    }
});