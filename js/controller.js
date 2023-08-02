// In the controller.js file, define functions to handle user interactions and control the flow of the application:

const Controller = {
  init: function () {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", this.onSearchBtnClick.bind(this));
  },

  onSearchBtnClick: async function () {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;

    if (city) {
      const data = await Model.fetchWeatherData(city);
      View.renderWeatherData(data);
    } else {
      View.renderWeatherData(null);
    }
  },
};

// Initialize the controller
Controller.init();
