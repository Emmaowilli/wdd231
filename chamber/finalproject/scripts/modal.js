export function showModal(title, description) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.getElementById('modal-close');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('open');

    closeButton.focus();

    closeButton.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
        }
    });
}