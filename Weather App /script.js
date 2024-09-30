// Replace 'YOUR_API_KEY' with your actual OpenWeather API key
const apiKey = 'YOUR_API_KEY';
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResultDiv = document.getElementById('weather-result');
const cityInput = document.getElementById('city-input');

// Event listener to fetch weather data when the button is clicked
getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    getWeather(city);
});

// Function to fetch weather data from OpenWeather API
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            alert(error.message);
        });
}

// Function to display weather data in the DOM
function displayWeather(data) {
    const city = data.name;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;

    weatherResultDiv.innerHTML = `
        <h3>Weather in ${city}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Feels like: ${feelsLike}°C</p>
        <p>Condition: ${weather}</p>
        <p>Humidity: ${humidity}%</p>
    `;
    
    weatherResultDiv.style.display = 'block';
}
