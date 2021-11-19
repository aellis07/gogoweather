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

// 5-DAY FORECAST
function getWeatherForecast(search) {
    var api_key = "092e71a1090dac60f74b32dccbf7f5bc";
    var requestUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        search.value +
        "&units=imperial&appid=";

    fetch(requestUrl + api_key)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            // EACH DATA.dt_tx OBJECT REPRESENTS 3 HOURS
            // data[0]-data[8] = 24 Hours

            // ======================================
            // DAY 1

            const rawDate1 = data.list[0].dt_txt;
            const newDate1 = rawDate1.substr(0, 11);
            console.log(newDate1);
            // console.log(data.list[0].dt_txt);

            document.getElementById("dateOne").textContent =
                "Date: " + newDate1;
            document.getElementById("tempOne").textContent =
                "Temperature: " + Math.round(data.list[0].main.temp) + " °F";
            document.getElementById("windOne").textContent =
                "Wind Speed: " + Math.round(data.list[0].wind.speed) + " mph";
            document.getElementById("humidityOne").textContent =
                "Humidity: " + Math.round(data.list[0].main.humidity) + " %";

            // ======================================
            // DAY 2

            const rawDate2 = data.list[8].dt_txt;
            const newDate2 = rawDate2.substr(0, 11);
            console.log(newDate2);
            // console.log(data.list[8].dt_txt);

            document.getElementById("dateTwo").textContent =
                "Date: " + newDate2;
            document.getElementById("tempTwo").textContent =
                "Temperature: " + Math.round(data.list[8].main.temp) + " °F";
            document.getElementById("windTwo").textContent =
                "Wind Speed: " + Math.round(data.list[8].wind.speed) + " mph";
            document.getElementById("humidityTwo").textContent =
                "Humidity: " + Math.round(data.list[8].main.humidity) + " %";

            // ======================================
            // DAY 3

            const rawDate3 = data.list[16].dt_txt;
            const newDate3 = rawDate3.substr(0, 11);
            console.log(newDate3);
            // console.log(data.list[16].dt_txt);

            document.getElementById("dateThree").textContent =
                "Date: " + newDate3;
            document.getElementById("tempThree").textContent =
                "Temperature: " + Math.round(data.list[16].main.temp) + " °F";
            document.getElementById("windThree").textContent =
                "Wind Speed: " + Math.round(data.list[16].wind.speed) + " mph";
            document.getElementById("humidityThree").textContent =
                "Humidity: " + Math.round(data.list[16].main.humidity) + " %";

            // ======================================
            // DAY 4

            const rawDate4 = data.list[24].dt_txt;
            const newDate4 = rawDate4.substr(0, 11);
            console.log(newDate4);
            // console.log(data.list[24].dt_txt);

            document.getElementById("dateFour").textContent =
                "Date: " + newDate4;
            document.getElementById("tempFour").textContent =
                "Temperature: " + Math.round(data.list[24].main.temp) + " °F";
            document.getElementById("windFour").textContent =
                "Wind Speed: " + Math.round(data.list[24].wind.speed) + " mph";
            document.getElementById("humidityFour").textContent =
                "Humidity: " + Math.round(data.list[24].main.humidity) + " %";

            // ======================================
            // DAY 5

            const rawDate5 = data.list[32].dt_txt;
            const newDate5 = rawDate5.substr(0, 11);
            console.log(newDate5);
            // console.log(data.list[32].dt_txt);

            document.getElementById("dateFive").textContent =
                "Date: " + newDate5;
            document.getElementById("tempFive").textContent =
                "Temperature: " + Math.round(data.list[32].main.temp) + " °F";
            document.getElementById("windFive").textContent =
                "Wind Speed: " + Math.round(data.list[32].wind.speed) + " mph";
            document.getElementById("humidityFive").textContent =
                "Humidity: " + Math.round(data.list[32].main.humidity) + " %";
        });
}
