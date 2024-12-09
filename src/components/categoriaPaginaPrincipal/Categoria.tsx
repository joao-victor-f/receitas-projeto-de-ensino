import React from 'react';
import styles from './categoria.module.css';

export default function Categoria(props) {
    return (
        <article className={styles.main_container}>
            <div>
                <img src={props.imagem} />
            </div>
            <div>
                <h3>{props.categoria.titulo}</h3>
                <p>{props.categoria.descricao}</p>
            </div>
        </article>
    );
}