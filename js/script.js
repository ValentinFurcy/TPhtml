document.addEventListener("DOMContentLoaded", function () {

    // ---------- GetElement --------- //
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirm-email");
    const confirmEmailMessage = document.getElementById("confirm-email-message");

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const confirmPasswordMessage = document.getElementById("confirm-password-message");

    const criteriaDiv = document.getElementById("password-criteria");
    // ---------- ------------------ --------- //
    // ---------- ------------------ --------- //


    // ---------- EventListener --------- //
    emailInput.addEventListener("input", checkEmailMatch);
    confirmEmailInput.addEventListener("input", checkEmailMatch);

    passwordInput.addEventListener("click", createListCriteria);
    passwordInput.addEventListener("input", createListCriteria);
    passwordInput.addEventListener("input", checkPasswordMatch);

    confirmPasswordInput.addEventListener("input", checkPasswordMatch);
    // ---------- ------------------ --------- //
    // ---------- ------------------ --------- //


    // ---------- Vérification email --------- //

    function checkEmailMatch() {
        const emailValue = emailInput.value;
        const confirmEmailValue = confirmEmailInput.value;

        if (emailValue === confirmEmailValue) {
            confirmEmailMessage.textContent = "Les emails sont concordants.";
            confirmEmailMessage.style.color = "rgba(72, 80, 79, 0.5)";
        } else {
            confirmEmailMessage.textContent = "Les emails ne sont pas concordants.";
            confirmEmailMessage.style.color = "red";
        }
    }
    // ---------- ------------------ --------- //
    // ---------- ------------------ --------- //


    // ---------- Vérification password --------- //

    function checkPasswordMatch() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        if (passwordValue === "" && confirmPasswordValue === "") {
            confirmPasswordMessage.innerHTML = "";
        } else if (passwordValue === confirmPasswordValue) {
            confirmPasswordMessage.textContent = "Les mots de passe sont concordants.";
            confirmPasswordMessage.style.color = "green";
        } else {
            confirmPasswordMessage.textContent = "Les mots de passe ne sont pas concordants.";
            confirmPasswordMessage.style.color = "red";
        }
    }
    // ---------- ------------------ --------- //
    // ---------- ------------------ --------- //

    // ---------- Create List Criteria --------- //    
    function createListCriteria() {
        const passwordValue = passwordInput.value;
        const criteriaList = document.createElement('ul');

        const criteria1 = document.createElement('li');
        criteria1.textContent = "au moins 12 caractères";
        criteria1.style.color = passwordValue.length >= 12 ? "green" : "red";
        criteriaList.appendChild(criteria1);

        const criteria2 = document.createElement('li');
        criteria2.textContent = "au moins une lettre minuscule (a-z)";
        criteria2.style.color = /[a-z]/.test(passwordValue) ? "green" : "red";
        criteriaList.appendChild(criteria2);

        const criteria3 = document.createElement('li');
        criteria3.textContent = "au moins une lettre majuscule (A-Z)";
        criteria3.style.color = /[A-Z]/.test(passwordValue) ? "green" : "red";
        criteriaList.appendChild(criteria3);

        const criteria4 = document.createElement('li');
        criteria4.textContent = "au moins un chiffre (0-9)";
        criteria4.style.color = /\d/.test(passwordValue) ? "green" : "red";
        criteriaList.appendChild(criteria4);

        const criteria5 = document.createElement('li');
        criteria5.textContent = "au moins un caractère spécial (!@#$%^&*()_+{ }[ ]:;|<>,.?\\~/-)";
        criteria5.style.color = /[!@#$%^&*()_+{}\[\]:;|<>,.?\\~/-]/.test(passwordValue) ? "green" : "red";
        criteriaList.appendChild(criteria5);

        criteriaDiv.innerHTML = '';
        criteriaDiv.appendChild(criteriaList);
    };
});
