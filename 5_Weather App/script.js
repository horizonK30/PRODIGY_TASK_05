// Function to generate random weather data
function generateRandomWeather() {
    const conditions = ["Clear Sky", "Partly Cloudy", "Cloudy", "Rainy", "Sunny"];
    const temperatures = [25, 30, 32, 33, 35, 28]; // Temperature range in °C
    const humidities = [50, 60, 70, 80, 65, 75]; // Humidity range in %
    const windSpeeds = [5, 10, 15, 20, 8, 12]; // Wind speed in km/h
  
    // Generate random values for each weather data point
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const temperature =
      temperatures[Math.floor(Math.random() * temperatures.length)];
    const humidity = humidities[Math.floor(Math.random() * humidities.length)];
    const windSpeed = windSpeeds[Math.floor(Math.random() * windSpeeds.length)];
  
    return {
      condition,
      temperature: `${temperature}°C`,
      humidity: `${humidity}%`,
      windSpeed: `${windSpeed} km/h`,
    };
  }
  
  // Function to get weather based on selected city
  function getWeather() {
    const city = document.getElementById("citySelect").value;
    const weatherInfo = document.getElementById("weather-info");
  
    // Generate random weather data
    const data = generateRandomWeather();
  
    // Display the random weather data for the selected city
    weatherInfo.innerHTML = `
      <h3>Weather in ${capitalizeFirstLetter(city)}</h3>
      <p><strong>Condition:</strong> ${data.condition}</p>
      <p><strong>Temperature:</strong> ${data.temperature}</p>
      <p><strong>Humidity:</strong> ${data.humidity}</p>
      <p><strong>Wind Speed:</strong> ${data.windSpeed}</p>
    `;
  }
  
  // Function to capitalize the first letter of the city name
  function capitalizeFirstLetter(city) {
    return city.charAt(0).toUpperCase() + city.slice(1);
  }
  