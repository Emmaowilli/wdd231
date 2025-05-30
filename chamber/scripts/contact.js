document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const timestampField = document.getElementById('submission-timestamp');
    const thankYouMessage = document.getElementById('thank-you-message');

    timestampField.value = new Date().toISOString();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(data);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }

        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});
