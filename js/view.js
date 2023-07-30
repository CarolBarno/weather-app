// In the view.js file, define functions to update the user interface:

const View = {
    renderWeatherData: function(data) {
      const weatherDataDiv = document.getElementById('weatherData');
  
      if (data) {
        const cityName = data.name;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const description = data.weather[0].description;
  
        weatherDataDiv.innerHTML = `
          <h2>Weather for ${cityName}</h2>
          <p>Temperature: ${temperature} °C</p>
          <p>Description: ${description}</p>
        `;
      } else {
        weatherDataDiv.innerHTML = '<p>City not found or error fetching data.</p>';
      }
    }
  };
  