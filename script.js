document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submitBtn");

    function validateName() {
        const nameError = document.getElementById("nameError");
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name cannot be empty.";
            return false;
        } else {
            nameError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const passwordError = document.getElementById("passwordError");
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    function checkFormValidity() {
        const isValid = validateName() && validateEmail() && validatePassword();
        submitBtn.disabled = !isValid;
    }

    nameInput.addEventListener("input", checkFormValidity);
    emailInput.addEventListener("input", checkFormValidity);
    passwordInput.addEventListener("input", checkFormValidity);
});
