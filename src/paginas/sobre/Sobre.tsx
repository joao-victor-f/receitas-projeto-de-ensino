import React from "react";
import imagem from "../../assets/notebook.jpg";
import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <>
            <div className={styles.pagina}>
                <div className={styles.secaoUm}>
                    <div className={styles.textoSecaoUm}>
                        <h1 className={styles.titulo_sobre}>Sobre nosotros</h1>
                        <p>Bienvenido a nuestro rincón culinario, donde la pasión por la cocina se encuentra con recetas fáciles, deliciosas y para todos los gustos.
                            Aquí encontrarás platos y propuestas  tradicionales argentinos que te sorprenderán.
                            Nuestro objetivo es inspirarte a explorar nuevos sabores y disfrutar del arte de cocinar.</p>
                        <p>¡Descubre, cocina y comparte con nosotros!</p>
                    </div>
                    <form className={styles.form}>
                        <h1 className={styles.titulo_contato}>Contáctanos</h1>
                            <div className={styles.campos_de_nome}>
                                <div className={styles.nome}>
                                    <label for="nome">Nombre de pila</label>
                                    <input type="text" id="nome" placeholder="Ana"/>
                                </div>
                                <div className="apelido">
                                    <label for="apelido">Apellido</label>
                                    <input type="text" id="apelido" placeholder="Ramírez"/>
                                </div>
                            </div>
                            <div className="email">
                                <label for="email">Email</label>
                                <input type="text" id="email" placeholder="email@delacocina.net"/>
                            </div>
                            <div className="mensagem">
                                <label for="mensagem">Tu mensaje</label>
                                <textarea className={styles.textarea} rows="20" id="mensagem" placeholder="Ingresa tu pregunta o mensaje"></textarea>
                            </div>
                            <input type="button" value="Enviar" id={styles.botao}/>
                    </form>
                </div>
                <div className="secaoDois">
                    <img src={imagem} alt="" />
                </div>
            </div>
        </>
    )
}