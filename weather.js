let getCity=()=>
{
    let cityBox=document.getElementById("city");
    let s1=cityBox.value;
    if(s1 === " ")
    {
        alert("City Cannot Be empty");
        return;
    }
    cityBox.value=""
    fetchWeather(s1);
}
let fetchWeather = async(city)=>
{
    let data=await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ed570ac911dad2a255e2965a53ced74&units=metric`);
    data= await data.json();
    showWeather(data);
}
let showWeather=(data)=>
{
    console.log(data);
    let weatherBox=document.getElementById("weather");
    let {name ,sys ,main ,weather ,wind ,}=data;
    weatherBox.innerHTML= `<h2>Weather in ${name}, ${sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`;
}
