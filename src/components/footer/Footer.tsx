import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.intro_container}>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <div className={styles.social_container}>
                        <a href="">
                            <img src="/icons/facebook-icon.svg" alt="ícone do facebook" />
                        </a>
                        <a href="">
                            <img src="/icons/instagram-icon.png" alt="ícone do instagram" />
                        </a>
                        <a href="">
                            <img src="/icons/tiktok-icon.png" alt="ícone do tiktok" />
                        </a>
                        <a href="">
                            <img src="/icons/twitter-icon.png" alt="ícone do X" />
                        </a>
                    </div>
                </div>
                <p>De La Cocina es el sitio donde la pasión por la gastronomía argentina cobra vida. Descubre recetas auténticas, consejos prácticos y sabores que llevan la esencia de Argentina a tu mesa. ¡Aprovecha!</p>
            </div>
            <div className={styles.topics_container}>
                <Link to="/">
                    <a>Pagina de inicio</a>
                </Link>
                <Link to="/sobre">
                    <a>Contacto</a>
                </Link>
                <Link to="/ingredientes">
                    <a>Ingredientes</a>
                </Link>
                <Link to="/categorias">
                    <a>Categorias</a>
                </Link>
            </div>
        </footer>
    );
}