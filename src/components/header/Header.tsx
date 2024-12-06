import SearchBar from "../searchBar/SearchBar.tsx";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <div>
        <SearchBar />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/">
              <a>Pagina de inicio</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/receitas">
              <a>Recetas</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/sobre">
              <a href="#">Contacto</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/ingredientes">
              <a href="#">Ingredientes</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/categorias">
              <a href="#">Categorias</a>
            </Link>
          </li>
          <li id={styles.menu_mobile}>
            <button id={styles.menu_button}>Menú</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
