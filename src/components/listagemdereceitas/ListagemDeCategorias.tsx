import React from 'react';
import styles from "./listagemDeCategorias.module.css";
import { data } from '../../lib/data';
import Categoria from '../categoria/Categoria';

export default function ListagemDeCategorias() {
    return (
        <section id={styles.listagem_receitas}>
            <h1>Tipos de comida</h1>
            <div id={styles.container_receitas}>
                {data.categorias.map(categoria => {
                    return (
                        <>
                            <Categoria categoria={categoria} />
                        </>
                    )
                })}
            </div>
        </section>
    );
}