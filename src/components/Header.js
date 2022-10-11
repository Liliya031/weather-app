import React from "react";
import"../style/Header.css"
import Search from "./Search";



export default function Header({searchCity}) {
  return (
    <header className="header">
    <h1 className="header-title"> Weather</h1>
    <Search searchCity = { searchCity }/>
    </header>
  )
}
