document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const inputField = document.querySelector('input[type="text"]');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = inputField.value.trim();   
        if (userData === "") {
            alert("Please enter your email or phone number.");
            return;
        }
        console.log("Logging in with:", userData);
        prompt("Success! Redirecting to your dashboard...");
        window.location.href = "index.html"; 
    });
});