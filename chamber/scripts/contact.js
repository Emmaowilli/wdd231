document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const timestampField = document.getElementById('submission-timestamp');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Set the timestamp when the form loads
    timestampField.value = new Date().toISOString();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Save to localStorage
        try {
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(data);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }

        // Hide form and show thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});
