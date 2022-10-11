
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherAndForecast from './components/WeatherAndForecast'
import getAddressOfCoordinates from "./api/geolocation2"
import getWeatherAndForecast from "./api/weatherAndForecast";
import getCoordinatesOfAddress from "./api/geolocation1"
import Loader from './components/Loader';


function App() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState("blank");
  
  function searchCity(target) {
    setAddress(target);
  }


  useEffect(() => {
    function makeRequest(position) {
      setContentState("loading");
      getAddressOfCoordinates( 
        position.coords.latitude,
        position.coords.longitude
        )

  .then((res) => {
    setLocationInfo({
      city: res.data.results[0].components.city_district,
      town: res.data.results[0].components.town,
      state: res.data.results[0].components.state_code,
      country: res.data.results[0].components.country_code
    });
  })
  .then(() =>
  setCoordinates({
    lat: position.coords.latitude,
    lng: position.coords.longitude
  })
)
}




  function catchError(err) {
    alert("ERROR(" + err.code + "): " + err.message);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeRequest, catchError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}, []);


useEffect(() => {
  if (address === "") return;

  setContentState("loading");
  getCoordinatesOfAddress(address)
  .then((res) => {
    if (
      res.data.results.length === 0 ||
      (res.data.results[0].components.city === undefined &&
        res.data.results[0].components.town === undefined)
    ) {
      return;
    }
    setCoordinates(res.data.results[0].geometry);
    setLocationInfo({
      city: res.data.results[0].components.city,
      town: res.data.results[0].components.town,
      state: res.data.results[0].components.state_code,
      country: res.data.results[0].components.country_code
    });
  })
}, [address]);








useEffect(() => {
  if (Object.keys(coordinates).length === 0) return;

  getWeatherAndForecast(coordinates)
    .then((res) => {
      setWeatherAndForecastInfo(res.data);
      setContentState("weatherAndForecast");
    })
   
}, [coordinates]);

const Main = {
  blank: () => null,
  loading: () => <Loader />,

  weatherAndForecast: () => (
    <WeatherAndForecast
      weatherInfo={weatherAndForecastInfo}
      location={locationInfo}
    />
  )
};
  return (
    <div className="App">
      <div className='App-container'>
        <div>
          <Header searchCity={searchCity}/>
          {Main[contentState]()}
        </div>
      </div>
   
    </div>
  );
  }

export default App;
