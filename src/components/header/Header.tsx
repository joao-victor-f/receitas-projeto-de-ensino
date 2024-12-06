import SearchBar from "../searchBar/SearchBar.tsx";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import React from 'react';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <div>
        <SearchBar />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#">Pagina de inicio</a>
          </li>
          <li className={styles.li}>
            <a href="#">Recetas</a>
          </li>
          <li className={styles.li}>
            <a href="#">Contacto</a>
          </li>
          <li className={styles.li}>
            <a href="#">Ingredientes</a>
          </li>
          <li id={styles.menu_mobile}>
            <button id={styles.menu_button}>Menú</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
