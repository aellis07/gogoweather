// DEPENDENCIES-GLOBAL VARIABLES

// USER INTERACTIONS
// === User clicks search button

var search = document.getElementById("searchBox");
var userHistory = document.getElementById("userSearchHistory");
var selectedCity = document.getElementById("selectedCityWeather");

document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
        event.preventDefault();
        if (search.value < 10) {
            search++;
        }
        search.value;
        localStorage.setItem("searchBox", search.value);
        userHistory.innerHTML = search.value;
        selectedCity.innerHTML = search.value;
        console.log(search.value);
        console.log(userHistory.innerHTML);
        console.log(selectedCity.innerHTML);
        getCurrentWeather(search);
        getWeatherForecast(search);
    });

// ============================= FUNCTIONS-APIs

// OPENWEATHER.ORG
// CURRENT WEATHER
function getCurrentWeather(search) {
    var api_key = "092e71a1090dac60f74b32dccbf7f5bc";
    var requestUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        search.value +
        "&units=imperial&appid=";
    fetch(requestUrl + api_key)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            document.getElementById("temp").textContent =
                "Current Temp: " + Math.round(data.main.temp) + " °F";
            document.getElementById("windSpeed").textContent =
                "Wind Speed: " + Math.round(data.wind.speed) + " mph";
            document.getElementById("humidity").textContent =
                "Humidity : " + Math.round(data.main.humidity) + " %";
            // document.getElementById("uvIndex").textContent =
            //     "UV Index: " + Math.round(data.main.temp) + ;
        });
}

function previousSearch() {
    var storedCity = localStorage.getItem("Last Search", search.value);
    userHistory.innerHTML = storedCity;
    // console.log(storedCity);
}
previousSearch();

// INITILIZE
