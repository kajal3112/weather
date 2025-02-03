import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    function handleCityChange(e){
        setCity(e.target.value);
    }
    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`9230cda92ad82d7d20f1cc9910e8306c`}`);
            setWeather(response);
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
    const handleClick= () => {
        fetchWeather();
    }
    return(
        <div className="weather-container">
            <input type="text" placeholder="enter city name" value={city} onChange={handleCityChange}/>
            <button onClick={handleClick}>Get Weather</button>
            {weather && <>
            <div className='weather-info'>
                <h3>{weather.data.name}</h3>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
            </>}
        </div>
    )
}

export default Weather;