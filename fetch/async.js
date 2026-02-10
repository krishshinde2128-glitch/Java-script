async function getData() {
    const response = await fetch("https://classroom.google.com/c/ODM4ODg4MjE3MzUy/p/NzkzNjMzNTI0OTY1/details");
    const data = await response.json();
    console.log(data);
}