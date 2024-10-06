document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const guestsInput = document.getElementById('guests');
    const timeInput = document.getElementById('time');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const guestsError = document.getElementById('guestsError');
    const timeError = document.getElementById('timeError');

    const successMessage = document.getElementById('successMessage');

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    const phonePattern = /^[0-9]{11}$/; // Updated to validate 11 digits

    // Helper function to show errors
    function showError(input, errorElement, message) {
        input.setAttribute('aria-invalid', 'true');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Helper function to clear errors
    function clearError(input, errorElement) {
        input.removeAttribute('aria-invalid');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'Name is required.');
        } else {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        if (!emailInput.value.match(emailPattern)) {
            showError(emailInput, emailError, 'Please enter a valid email.');
        } else {
            clearError(emailInput, emailError);
        }
    });

    phoneInput.addEventListener('input', () => {
        if (!phoneInput.value.match(phonePattern)) {
            showError(phoneInput, phoneError, 'Phone number must be 11 digits.');
        } else {
            clearError(phoneInput, phoneError);
        }
    });

    dateInput.addEventListener('input', () => {
        if (!dateInput.value) {
            showError(dateInput, dateError, 'Please select a reservation date.');
        } else {
            clearError(dateInput, dateError);
        }
    });

    guestsInput.addEventListener('input', () => {
        if (guestsInput.value < 1) {
            showError(guestsInput, guestsError, 'Number of guests must be at least 1.');
        } else {
            clearError(guestsInput, guestsError);
        }
    });

    timeInput.addEventListener('input', () => {
        if (!timeInput.value) {
            showError(timeInput, timeError, 'Please select a reservation time.');
        } else {
            clearError(timeInput, timeError);
        }
    });

    // Validate on form submit
    form.addEventListener('submit', (e) => {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'Name is required.');
            isValid = false;
        }

        if (!emailInput.value.match(emailPattern)) {
            showError(emailInput, emailError, 'Please enter a valid email.');
            isValid = false;
        }

        if (!phoneInput.value.match(phonePattern)) {
            showError(phoneInput, phoneError, 'Phone number must be 11 digits.');
            isValid = false;
        }

        if (!dateInput.value) {
            showError(dateInput, dateError, 'Please select a reservation date.');
            isValid = false;
        }

        if (guestsInput.value < 1) {
            showError(guestsInput, guestsError, 'Number of guests must be at least 1.');
            isValid = false;
        }

        if (!timeInput.value) {
            showError(timeInput, timeError, 'Please select a reservation time.');
            isValid = false;
        }

        // Prevent submission if validation fails
        if (!isValid) {
            e.preventDefault();
        } else {
            // Display success message
            successMessage.style.display = 'block';
            e.preventDefault(); // For testing purposes, to prevent form submission
        }
    });
});
