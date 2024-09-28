let search = document.getElementById("search");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");

const apiKey = "d351c31f91fee2a1614117af365f8737";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function checkWeather() {
    let userInput = document.getElementById("userInput").value;
    const response = await fetch(apiUrl + `&q=${userInput}` + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        // console.log(data);
        humidity.innerText = data.main.humidity + " %"; 
        wind.innerText = data.wind.speed + " km/hr"; 
        temp.innerText = Math.round(data.main.temp) + " °C"; 
        city.innerText = data.name; 
        // console.log(data.name);
    
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }   
}

search.addEventListener("click", checkWeather);
