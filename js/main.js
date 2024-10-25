const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const firstNameInvalid = document.querySelector("#firstName + .error-message");
const lastNameInvalid = document.querySelector("#lastName + .error-message");
const emailInvalid = document.querySelector("#email + .error-message");
const queryTypeInvalid = document.querySelector(".radio-options + .error-message");
const messageInvalid = document.querySelector("#message + .error-message");
const checkboxInvalid = document.querySelector(".checkbox-container + .error-message");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const queryTypeValue = document.querySelector("input[type='radio']:checked");
    const messageValue = message.value;
    const checkboxChecked = checkbox.checked;

    // First Name Validation
    if (!firstNameValue) {
        firstNameInvalid.classList.add("show-error");
        firstName.classList.add("invalid-highlight");
        return;  // Stop here if first name is invalid
    } else {
        firstNameInvalid.classList.remove("show-error");
        firstName.classList.remove("invalid-highlight");
    }

    // Last Name Validation
    if (!lastNameValue) {
        lastNameInvalid.classList.add("show-error");
        lastName.classList.add("invalid-highlight");
        return;  // Stop here if last name is invalid
    } else {
        lastNameInvalid.classList.remove("show-error");
        lastName.classList.remove("invalid-highlight");
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
        emailInvalid.classList.add("show-error");
        email.classList.add("invalid-highlight");
        return;  // Stop here if email is invalid
    } else {
        emailInvalid.classList.remove("show-error");
        email.classList.remove("invalid-highlight");
    }

    // Query Type Validation
    if (!queryTypeValue) {
        queryTypeInvalid.classList.add("show-error");
        return;  // Stop here if query type is not selected
    } else {
        queryTypeInvalid.classList.remove("show-error");
    }

    // Message Validation
    if (!messageValue) {
        messageInvalid.classList.add("show-error");
        message.classList.add("invalid-highlight");
        return;  // Stop here if message is empty
    } else {
        messageInvalid.classList.remove("show-error");
        message.classList.remove("invalid-highlight");
    }

    // Checkbox Validation
    if (!checkboxChecked) {
        checkboxInvalid.classList.add("show-error");
        return;  // Stop here if checkbox is not checked
    } else {
        checkboxInvalid.classList.remove("show-error");
    }

    // Success Handling
    successMessage.classList.add("show-success-message");

    form.reset();

    setTimeout(() => {
        successMessage.classList.remove("show-success-message");
    }, 3000); 
});
