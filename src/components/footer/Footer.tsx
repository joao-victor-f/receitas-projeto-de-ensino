import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
    return (
        <footer>
            <img src={logo}/>
            <div id="links_footer">
                <div className="references">
                    <a href="#" className="main-reference">Pagina de inicio</a>
                    <a href="#">Sobre nosotros</a>
                    <a href="#">Recetas</a>
                    <a href="#">Feedbacks</a>
                </div>
                <div className="references">
                    <a href="#" className="main-reference">Recetas</a>
                    <a href="#">Agregar una receta</a>
                    <a href="#">Historia de la cocina argentina</a>
                    <a href="#">Recomendaciones de recetas</a>
                </div>
                <div className="references">
                    <a href="#" className="main-reference">Sobre nosotros</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </footer>
    );
}