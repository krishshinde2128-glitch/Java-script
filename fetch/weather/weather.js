function getWeather(){
    const latitude = 19.0760; // Mumbai latitude
    const longitude = 72.8777; // Mumbai longitude
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.hourly.temperature_2m[0]; 
            document.getElementById("weather-info").textContent = `Current Temperature in Mumbai: ${temperature}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-info").textContent = "Unable to fetch weather data.";
        });

        const weatherArea = document.getElementById("weather-info");
        weatherArea.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
            <p>Fetching the latest weather data...</p>
        </div>
        `
    
}
