let searchform = document.querySelector(".search-form");
let searchbutton = document.querySelector(".search-button");

searchbutton.addEventListener("click", function (e) {
  e.preventDefault();

  let city = document.querySelector(".input-city").value;
  console.log(city);
  document.querySelector(".input-city").value = "";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      "{API HERE}"
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => {
      //getting the values from the api

      let temperature = data.main.temp;
      console.log(temperature);
      let humidity = data.main.humidity;
      console.log(humidity);
      let windspeed = data.wind.speed;
      console.log(windspeed);
      let description = data.weather[0].main;

      //grabbing html sections
      let descriptionSection = document.querySelector(".description");
      let citySection = document.querySelector(".city");
      let temperatureSection = document.querySelector(".temp");
      let humiditySection = document.querySelector(".humidity");
      let windSpeedSection = document.querySelector(".wind");

      //displaying on Page

      document.querySelector(".Weather").classList.remove("invisible");

      citySection.innerHTML = " " + city;
  
      temperatureSection.innerHTML = "Temperature:" + " " + temperature + "F";
      humiditySection.innerHTML = "Humidity:" + " " + humidity + "%";
      windSpeedSection.innerHTML = "Windspeed:" + " " + windspeed + "mph";

      //Changing background image based on weather
      descriptionSection.innerHTML = description;
      console.log(descriptionSection.innerHTML);
      descriptionSection.innerHTML == "Clear"
        ? Sunny()
        : (document.querySelector(".background-image").style.backgroundImage =
            "url('./cloudy.jpg')");
    });
});
/*  function changeBackground() {
   document.querySelector(".background-image").style.backgroundImage =
     "url('sunny.jpg')";
 } */


function Sunny() {
  document.querySelector(".background-image").style.backgroundImage =
    "url('./sunny.jpg')";
}
