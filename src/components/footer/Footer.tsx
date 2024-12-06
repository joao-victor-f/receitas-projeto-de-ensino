import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";

export default function Footer() {
    return (
        <footer>
            <img src={logo}/>
            <div id={styles.links_footer}>
                <div className={styles.references}>
                    <a href="#" className={styles.main_reference}>Pagina de inicio</a>
                    <a href="#">Sobre nosotros</a>
                    <a href="#">Recetas</a>
                    <a href="#">Feedbacks</a>
                </div>
                <div className={styles.references}>
                    <a href="#" className={styles.main_reference}>Recetas</a>
                    <a href="#">Agregar una receta</a>
                    <a href="#">Historia de la cocina argentina</a>
                    <a href="#">Recomendaciones de recetas</a>
                </div>
                <div className={styles.references}>
                    <a href="#" className={styles.main_reference}>Sobre nosotros</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </footer>
    );
}