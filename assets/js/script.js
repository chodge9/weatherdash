var cities = [];
var citySearchInputEl = document.querySelector("#searched-city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");


var getCityWeather = function(city){
    var apiKey = "6eb39225f19081d854391179d7843a68"
    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}"
}