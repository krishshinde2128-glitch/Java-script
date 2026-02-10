document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = signupForm.querySelector('input[placeholder="First Name"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        if (password.length < 8) {
            prompt("Password must be at least 8 characters long.");
            return;
        }
        if (!email.includes("@")) {
            prompt("Please enter a valid email address.");
            return;
        }
        const newUser = {
            name: firstName,
            email: email,
            timestamp: new Date().toISOString()
        };
        console.log("New User Created:", newUser);
        prompt(`Welcome to Uber, ${firstName}! Your account has been created.`);
        window.location.href = "login.html";
    });
});