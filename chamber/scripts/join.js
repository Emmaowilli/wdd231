document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membership-form');
    const timestampField = document.getElementById('timestamp');
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('.info-btn');
    const closes = document.querySelectorAll('.close');

    // Set the timestamp when the form loads
    timestampField.value = new Date().toISOString();

    // Modal functionality
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closes.forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Form submission handling (optional, since we're using GET method)
    form.addEventListener('submit', (event) => {
        // The form will redirect to thankyou.html via GET method
        // We can add client-side validation or logging if needed
        console.log('Form submitted');
    });
});
