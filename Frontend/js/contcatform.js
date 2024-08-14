document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear any existing error messages
    clearErrors();

    // Retrieve form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    // Flag to check if form is valid
    let formIsValid = true;

    // Validate name (not empty and not numeric)
    if (nameField.value.trim() === '' || !isNaN(nameField.value.trim())) {
        showError(nameField, "Name should not be empty or numeric.");
        formIsValid = false;
    }

    // Validate email (simple regex check)
    if (!validateEmail(emailField.value)) {
        showError(emailField, "Please enter a valid email address.");
        formIsValid = false;
    }

    // Validate phone (must be 10 digits)
    if (!/^\d{10}$/.test(phoneField.value.trim())) {
        showError(phoneField, "Phone number should be 10 digits.");
        formIsValid = false;
    }

    // Validate message (not empty)
    if (messageField.value.trim() === '') {
        showError(messageField, "Message should not be empty.");
        formIsValid = false;
    }

    // Submit form if valid
    if (formIsValid) {
        alert("Form submitted successfully!");
        // Here, you would typically send the form data to the server
        // For now, just reset the form and refresh the page
        this.reset();
        window.location.reload();
    }
});

function showError(element, message) {
    const errorMessage = element.parentNode.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '0.9em';
    errorMessage.style.marginTop = '5px';
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });
}

function validateEmail(email) {
    // Simple email regex for demonstration purposes
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time validation to clear error on correct input
document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim() !== '' && isNaN(this.value.trim())) {
        clearError(this);
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (validateEmail(this.value)) {
        clearError(this);
    }
});

document.getElementById('phone').addEventListener('input', function() {
    if (/^\d{10}$/.test(this.value.trim())) {
        clearError(this);
    }
});

document.getElementById('message').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        clearError(this);
    }
});

function clearError(element) {
    const errorMessage = element.parentNode.querySelector('.error-message');
    errorMessage.textContent = '';
}
