import React from 'react';
import styles from "./listagemDeCategorias.module.css";
import { data } from '../../lib/data';
import Categoria from '../categoria/Categoria';
import { Link } from 'react-router-dom';

export default function ListagemDeCategorias() {
    return (
        <section id={styles.listagem_receitas}>
            <h1>Tipos de comida</h1>
            <div id={styles.container_receitas}>
                {data.categorias.map(categoria => {
                    return (
                        <Link to={categoria.path}>
                            <Categoria categoria={categoria} />
                        </Link>
                    )
                })}
            </div>
        </section>
    );
}