import "../style/Weather.css";
import React from "react";

export default function Current({weatherInfo, location, date}) {
  return (
    <div className="Weather">
      <div className="Weather-information">
        <img className="Weather-icon" 
        src={`http://openweathermap.org/img/w/${weatherInfo.current.weather[0].icon}.png`}
          
          alt={weatherInfo.current.weather[0].main} />

<div className="Weather-form">
    <div className="Weather-tem"> {parseFloat(weatherInfo.current.temp).toFixed(1)}&deg;C</div>
<div className="Weather-humidity">Humidity: {weatherInfo.current.humidity}%</div>
<div className=" Weather-wind">Wind: {weatherInfo.current.wind_speed.toFixed()} km/h{" "}</div>
    </div>
</div> 
<div className="Weather-other-info">
        <h2 className="other-info-city">
          {location.city || location.town},{" "}
          {location.state || location.country}
        </h2>
      
        <p>{date}</p>
        {/* <h3 className="other-info__clouds"> */}
          {weatherInfo.current.weather[0].description}
        {/* </h3> */}
      {/* </div> */}


      </div>
     </div>
  );
}
