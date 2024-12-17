import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <div className={styles.intro_container}>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                        <div className={styles.social_container}>
                            <a href="https://youtube.com/@delacocinaoficial">
                                <img src="/imagens/icons/youtube-circle-svgrepo-com.svg" width={24} height={24} alt="ícone do Youtube"/>
                            </a>
                            <a href="https://www.instagram.com/delacocina.oficial/">
                                <img src="/imagens/icons/instagram-icon.png" alt="ícone do instagram" />
                            </a>
                            <a href="https://tiktok.com/@delacocinaoficial">
                                <img src="/imagens/icons/tiktok-icon.png" alt="ícone do tiktok" />
                            </a>
                            <a href="">
                                <img src="/imagens/icons/twitter-icon.png" alt="ícone do X" />
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
            </div>
            <p>© 2024 De La Cocina</p>
        </footer>
    );
}