
import React from "react";
import "../style/Forecast.css";

export default function Forecast({weatherInfo, date}) {
  return (
    <div className="forecast">
      <div className="forecast-title"> {[date[0], date[1], date[2]]} </div>
      <img
        className="forecast-icon"
          src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
          
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
         
            <p></p>
          </div>
          <div className="wind">
          
              <p className="big-text">{weatherInfo.wind_speed.toFixed()} km/h</p>
        
            <p></p>
          </div>
        </div>
        
        </div>
      </div>
  

  
        
           
     
  );
}
