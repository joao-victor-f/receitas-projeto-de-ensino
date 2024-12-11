import React from 'react';
import styles from './ingredientes.module.css';
import imagemDoHeader from '../../assets/imagemDoHeader.jpg';
import { Link } from "react-router-dom";
import ListagemDeIngredientes from '../../components/listagemDeIngredientes/ListagemDeIngredientes';


export default function Ingredientes() {
    return (
        <>
            <div id={styles.conteudoReceitas}>
                <div id={styles.conteudoHeader}>
                    <img src={imagemDoHeader} alt="Ingredientes" id={styles.imagemDoHeader}/>
                    <div id={styles.textoHeader}>
                        <h1 id={styles.tituloIngredientes}>Ingredientes</h1>
                        <span id={styles.descricaoHeader}>Los ingredientes que componen la cocina argentina</span>
                    </div>
                </div>
                <Link to="/criar-ingredientes">
                    <a id={styles.inserirIngrediente}>+ AGREGAR INGREDIENTE</a>
                </Link>
                <ListagemDeIngredientes />
            </div>
        </>
    );
}