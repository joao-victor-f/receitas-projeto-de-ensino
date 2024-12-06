import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <img src={logo}/>
            <div id={styles.links_footer}>
                <div className={styles.references}>

                    <Link to="/">
                        <a className={styles.main_reference}>Pagina de inicio</a>
                    </Link>
                    <Link to="/#recetas">
                        <a>Recetas</a>
                    </Link>
                    <Link to="/#feedbacks">
                        <a>Feedbacks</a>
                    </Link>
                </div>
                <div className={styles.references}>
                    <Link to="/categorias">
                        <a className={styles.main_reference}>Categorias</a>
                    </Link>
                    <Link to="/categorias#historia_cozinha">
                        <a>Historia de la cocina argentina</a>
                    </Link>
                    <Link to="/categorias#recomendaciones">
                        <a>Recomendaciones de recetas</a>
                    </Link>
                </div>
                <div className={styles.references}>
                    <Link to="/sobre">
                        <a className={styles.main_reference}>Sobre nosotros</a>
                    </Link>
                    <Link to="/sobre#contacto">
                        <a>Contacto</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}