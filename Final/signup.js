function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearAllErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    document.getElementById('errorAlert').classList.remove('show');
}

// Ensure the script runs after the HTML is loaded
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(e) {
        // 1. Stop the form from submitting automatically
        e.preventDefault();
        clearAllErrors();
        
        let hasError = false;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="user_type"]:checked');

        // 2. Basic Validation
        if (name.length < 3) { showError('name', 'Name is too short'); hasError = true; }
        if (!email.includes('@')) { showError('email', 'Invalid email'); hasError = true; }
        if (phone.length < 11) { showError('phone', 'Phone must be 11 digits'); hasError = true; }
        if (password.length < 6) { showError('password', 'Password too short'); hasError = true; }
        if (!userType) { showError('userType', 'Select Buyer or Seller'); hasError = true; }

        // 3. The Connection: If no errors, actually send the data to signup.php
        if (!hasError) {
            console.log("Validation passed! Submitting to PHP...");
            this.submit(); 
        } else {
            const alert = document.getElementById('errorAlert');
            alert.textContent = "Please fill all required fields correctly.";
            alert.classList.add('show');
        }
    });
});