export default function Info({weatherInfo, date}) {
    return (
    <div className="bottom">
      <div className="feel">
        {" "}
    
          <p className="big-text">
            {parseFloat(weatherInfo.main.feels_like - 273.15).toFixed(1)}&deg;C
          </p>
     
        <p>Відчуття</p>
      </div>

      <div className="humidity">
        {" "}
      
          <p className="big-text"> {weatherInfo.humidity}%</p>
    
        <p>Вологість</p>
      </div>
      <div className="wind">
     
          <p className="big-text">{weatherInfo.wind_ speed.toFixed()} MPH</p>
      
        <p>Швидкість вітру</p>
      </div>
    </div>
  )}