const appid = "76e0a4771c25e933543aa09ae9e7b73d"

function tempFunction() {

const city = document.getElementById("myCity").value;
const tempUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`

const tempElement = document.getElementById("temp");
const descElement = document.getElementById("desc");
const latElement = document.getElementById("lat");
const lonElement = document.getElementById("lon");
const countryElement = document.getElementById("country");
const weeklyElement = document.getElementById("weeklyForecast");
const weatherIMG = document.getElementById("weatherIMG");

fetch(tempUrl)
.then(data=>data.json())
.then(obj=>{
    tempElement.innerHTML = obj.main.temp;
    descElement.innerHTML = obj.weather[0].main;
    weatherIMG.innerHTML = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    
    if(tempElement.innerHTML > 0 ){
        tempElement.style.color = "red";
    } else if(tempElement.innerHTML < 0) {
        tempElement.style.color = "blue";
    } else {
        tempElement.style.color = "blue";
    }
    tempElement.innerHTML = "Temperature: " + obj.main.temp + " °C";
    lonElement.innerHTML = "Longitude: " + obj.coord.lon;
    latElement.innerHTML = "Latitude: " + obj.coord.lat;
    countryElement.innerHTML = "Country: " + obj.sys.country;
    })

fetch(forecastUrl)
.then(data=>data.json())
.then(obj=>{
    const today = obj.list[0].main.temp + obj.list[1].main.temp + obj.list[2].main.temp + obj.list[3].main.temp + obj.list[4].main.temp + obj.list[5].main.temp + obj.list[6].main.temp + obj.list[7].main.temp;
    const tomorrow = obj.list[8].main.temp + obj.list[9].main.temp + obj.list[10].main.temp + obj.list[11].main.temp + obj.list[12].main.temp + obj.list[13].main.temp + obj.list[14].main.temp + obj.list[15].main.temp;
    const day3 = obj.list[16].main.temp + obj.list[17].main.temp + obj.list[18].main.temp + obj.list[19].main.temp + obj.list[20].main.temp + obj.list[21].main.temp + obj.list[22].main.temp + obj.list[23].main.temp;
    const day4 = obj.list[24].main.temp + obj.list[25].main.temp + obj.list[26].main.temp + obj.list[27].main.temp + obj.list[28].main.temp + obj.list[29].main.temp + obj.list[30].main.temp + obj.list[31].main.temp;
    const day5 = obj.list[32].main.temp + obj.list[33].main.temp + obj.list[34].main.temp + obj.list[35].main.temp + obj.list[36].main.temp + obj.list[37].main.temp + obj.list[38].main.temp + obj.list[39].main.temp;
    const forecast = (today + tomorrow + day3 + day4 + day5)/40;

    
    weeklyElement.innerHTML = forecast;

    if(weeklyElement.innerText > 0) {
        weeklyElement.style.color = "red";
    } else if(weeklyElement.innerHTML < 0) {
        weeklyElement.style.color = "blue";
    } else {
        weeklyElement.style.color = "blue";
    }

    weeklyElement.innerHTML = forecast + " °C";
    
})

}

function forecastFunction() {

}




