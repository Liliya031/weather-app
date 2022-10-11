import "../style/Weather.css";
import React from "react";

export default function Current({weatherInfo, location}) {
  return (
    <div className="Weather">
      <div className="Weather-information">
        <img className="Weather-icon" src={`http://openweathermap.org/img/w/${weatherInfo.current.weather[0].icon}.png`}
          
          alt={weatherInfo.current.weather[0].main} />

<div className="Wether-form">
    <div className="Wether-tem"> {parseFloat(weatherInfo.current.temp).toFixed(1)}&deg;C</div>
<div className="Wether-humidity">{weatherInfo.current.humidity}%</div>
<div className=" Wether-wind">{weatherInfo.current.wind_speed.toFixed()} km/h{" "}</div>
    </div>
</div> 
<div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country}
        </h2>
        {/* <p>{date}</p> */}
        {/* <h3 className="other-info__clouds"> */}
          {weatherInfo.current.weather[0].description}
        {/* </h3> */}
      {/* </div> */}






      </div>
     </div>
  );
}
