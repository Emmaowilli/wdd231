document.addEventListener('DOMContentLoaded', () => {
    const formDataDiv = document.getElementById('form-data');

    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('first-name') || 'N/A';
    const lastName = urlParams.get('last-name') || 'N/A';
    const email = urlParams.get('email') || 'N/A';
    const phone = urlParams.get('phone') || 'N/A';
    const businessName = urlParams.get('business-name') || 'N/A';
    const timestamp = urlParams.get('timestamp') || 'N/A';

    // Display the form data
    formDataDiv.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Business/Organization Name:</strong> ${businessName}</p>
        <p><strong>Submission Date:</strong> ${timestamp}</p>
    `;
});