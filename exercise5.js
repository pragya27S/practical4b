// Get references to form elements
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const password1Error = document.getElementById('password1Error');
const password2Error = document.getElementById('password2Error');
const submitButton = document.getElementById('submitButton');

// Function to validate passwords
function validatePasswords() {
    let isValid = true;

    // Check password length
    if (password1.value.length < 6) {
        password1Error.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    } else {
        password1Error.textContent = '';
    }

    // Check if passwords match
    if (password2.value !== password1.value) {
        password2Error.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        password2Error.textContent = '';
    }

    // Show or hide the submit button based on validity
    submitButton.style.display = isValid ? 'block' : 'none';
}

// Add event listeners to validate passwords on input
password1.addEventListener('input', validatePasswords);
password2.addEventListener('input', validatePasswords);

// Validate on page load to handle cases where fields might be pre-filled
validatePasswords();
