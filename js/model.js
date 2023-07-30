// In the model.js file, define functions to handle data retrieval using Axios:
const apiKey = process.env.apiKey;
const baseUrl = 'http://api.weatherapi.com/v1';

const Model = {
    fetchWeatherData: async function(city) {
      const url = `${baseUrl}/current.json?key=${apiKey}&q=London`;
  
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
      }
    }
  };
  