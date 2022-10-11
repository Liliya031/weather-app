
import React from "react";
import "../style/Forecast.css";

export default function Forecast({weatherInfo, date}) {
  return (
    <div>
      <div className="forecast-title"> {[date[0], date[1], date[2]]} </div>
      <image
        className="forecast-icon"
        src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.weather[0].icon +
            ".png"
          }
        alt={weatherInfo.weather[0].main}
      />
      <div className="forecast-temperature">
      <span className="temperature-max">
          {parseFloat(weatherInfo.temp.max).toFixed(1)}&deg;C
          
        </span>
        <span className="temperature-min">
        {parseFloat(weatherInfo.temp.min).toFixed(1)}&deg;C
         
        </span>
        <div className="bottom">
          

          <div className="humidity">
            {" "}
         
              <p className="big-text"> {weatherInfo.humidity}%</p>
         
            <p>Вологість</p>
          </div>
          <div className="wind">
          
              <p className="big-text">{weatherInfo.wind_speed.toFixed()} MPH</p>
        
            <p>Швидкість вітру</p>
          </div>
        </div>

      </div>
    </div>

  
        
           
     
  );
}
