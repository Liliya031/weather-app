import "../style/Search.css";
import React, { useState } from 'react'

export default function Search( {searchCity}) {
    const[currentCity, setCurentCity]=useState("")
    function handleInputChange(event){
        setCurentCity (event.target.value);
    }
   function handleButtonClick() {
    if (currentCity.trim() === "")return;
        searchCity(currentCity)  
    
   }

  return (
    <div className="Search">
        <label className="Search-label">
            <input className="Search-input"
            placeholder="Введіть своє місто"
            value={currentCity}
            onChange={handleInputChange}
            ></input>
        </label>
<button className="Search-button"
type="button" onClick={handleButtonClick}> Пошук</button>
    </div>
  )
}
