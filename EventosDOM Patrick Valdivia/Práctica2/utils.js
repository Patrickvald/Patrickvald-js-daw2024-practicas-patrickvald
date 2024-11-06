const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const submitBtn = document.getElementById('submit-btn');

        //Email validator
        emailInput.addEventListener('blur', () => {
            const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
            toggleSubmitButton();
        });

        //Password validator
        passwordInput.addEventListener('blur', () => {
            if (passwordInput.value.length < 8 || passwordInput.value.length > 10) {
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }
            toggleSubmitButton();
        });

        //Hide error messages when you are editing the input
        emailInput.addEventListener('input', () => {
            emailError.style.display = 'none';
            toggleSubmitButton();
        });

        passwordInput.addEventListener('input', () => {
            passwordError.style.display = 'none';
            toggleSubmitButton();
        });

        //Able or disable the submit button
        function toggleSubmitButton() {
            if (isEmailValid() && isPasswordValid()) {
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = 'blue';
            } else {
                submitBtn.disabled = true;
                submitBtn.style.backgroundColor = 'grey';
            }
        }

        function isEmailValid() {
            const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
            return emailPattern.test(emailInput.value);
        }

        function isPasswordValid() {
            const length = passwordInput.value.length;
            return length >= 8 && length <= 10;
        }