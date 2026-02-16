let btn = document.getElementById("themebtn");
let body = document.body;

body.classList.add("light");

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    if (body.classList.contains("dark")) {
        btn.innerText = "☀️ Switch to Light Mode";
    } else {
        btn.innerText = "🌙 Switch to Dark Mode";
    }
});
