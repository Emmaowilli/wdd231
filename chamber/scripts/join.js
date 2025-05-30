document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membership-form');
    const timestampField = document.getElementById('timestamp');
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('.info-btn');
    const closes = document.querySelectorAll('.close');
    timestampField.value = new Date().toISOString();
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
    form.addEventListener('submit', (event) => {
        console.log('Form submitted');
    });
});
