const apiKey = "3588f46d00f0ccb62d1ca406bbc9950e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (respone.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await respone.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humedity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main === "Clouds") {
      WeatherIcon.src = "image/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      WeatherIcon.src = "image/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      WeatherIcon.src = "image/drizzle.png";
    } else if (data.weather[0].main === "Humidity") {
      WeatherIcon.src = "image/humidity.png";
    } else if (data.weather[0].main === "Mist") {
      WeatherIcon.src = "image/mist.png";
    } else if (data.weather[0].main === "Rain") {
      WeatherIcon.src = "image/Rain.png";
    } else if (data.weather[0].main === "Snow") {
      WeatherIcon.src = "image/snow.png";
    } else {
      WeatherIcon.src = "image/wind.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
checkWeather();
