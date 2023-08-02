// In the view.js file, define functions to update the user interface:

const View = {
  renderWeatherData: function (data) {
    const weatherDataDiv = document.getElementById("weatherData");
    const { current, location } = data;

    if (data) {
      const cityName = location.name;
      const temperature = current.temp_c;
      const description = current.condition.text;

      weatherDataDiv.innerHTML = `
          <h2>Weather for ${cityName}</h2>
          <p>Temperature: ${temperature} °C</p>
          <p>Description: ${description}</p>
        `;
    } else {
      weatherDataDiv.innerHTML =
        "<p>City not found or error fetching data.</p>";
    }
  },
};
