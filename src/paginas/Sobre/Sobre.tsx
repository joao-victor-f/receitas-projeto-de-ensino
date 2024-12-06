import React from "react";
import imagem from "../../assets/notebook.jpg";
import "./Sobre.css"

export default function Sobre() {
    return (
        <>
            <div className="pagina">
                <div className="secaoUm">
                    <div className="textoSecaoUm">
                        <h1 className="titulo-sobre">Sobre nosotros</h1>
                        <p>Bienvenido a nuestro rincón culinario, donde la pasión por la cocina se encuentra con recetas fáciles, deliciosas y para todos los gustos.
                            Aquí encontrarás platos y propuestas  tradicionales argentinos que te sorprenderán.
                            Nuestro objetivo es inspirarte a explorar nuevos sabores y disfrutar del arte de cocinar.</p>
                        <p>¡Descubre, cocina y comparte con nosotros!</p>
                    </div>
                    <div className="formularioSecaoUm">
                        <form>
                            <h1 className="titulo-contato">Contáctanos</h1>
                            <label for="nome">Nombre de pila</label>
                            <input type="text" id="nome" placeholder="Ana"/>
                            <label for="apelido">Apellido</label>
                            <input type="text" id="apelido" placeholder="Ramirez"/>
                            <label for="email">Email</label>
                            <input type="text" id="email" placeholder="email@delacocina.net"/>
                            <label for="mensagem">Tu mensaje</label>
                            <input type="text" id="mensagem" placeholder="Ingresa tu pregunta o mensaje"/>
                        </form>
                    </div>
                </div>
                <div className="secaoDois">
                    <img src={imagem} alt="" />
                </div>
            </div>
        </>
    )
}