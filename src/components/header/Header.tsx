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
            <a>Pagina de inicio</a>
          </li>
          <li>
            <a>Recetas</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
          <li>
            <button id="menu-button">Menú</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
