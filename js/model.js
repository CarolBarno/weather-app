// In the model.js file, define functions to handle data retrieval using Axios:
const apiKey = 'b7e076186ef14c03bc372729233007';
const baseUrl = "http://api.weatherapi.com/v1";

const Model = {
  fetchWeatherData: async function (city) {
    const url = `${baseUrl}/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  },
};
