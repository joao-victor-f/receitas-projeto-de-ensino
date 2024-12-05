import React from "react";
import imagem from "../../assets/notebook.jpg";
import "./Sobre.css"

export default function Sobre() {
    return (
        <>
            <div className="pagina">
                <div className="secaoUm">
                    <h1>Sobre nosotros</h1>
                    <p>Bienvenido a nuestro rincón culinario, donde la pasión por la cocina se encuentra con recetas fáciles, deliciosas y para todos los gustos. 
                        Aquí encontrarás platos y propuestas  tradicionales argentinos que te sorprenderán. 
                        Nuestro objetivo es inspirarte a explorar nuevos sabores y disfrutar del arte de cocinar.</p>
                    <p>¡Descubre, cocina y comparte con nosotros!</p>
                </div>
                <div className="secaoDois">
                    <img src={imagem} alt="" />
                </div>
            </div>
        </>
    )
}