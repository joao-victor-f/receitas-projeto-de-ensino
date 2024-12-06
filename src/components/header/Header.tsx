import SearchBar from "../searchBar/SearchBar.tsx";
import logo from "../../assets/logo.png";
import "./header.css";
import React from "react";
export default function Header() {
  return (
    <header>
      <img src={logo}/>
      <div>
        <SearchBar />
        <ul>
          <li>
            <a href="#">Pagina de inicio</a>
          </li>
          <li>
            <a href="#">Recetas</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Ingredientes</a>
          </li>
          <li id="menu-mobile">
            <button id="menu-button">Menú</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
