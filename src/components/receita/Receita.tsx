import React from 'react';
import styles from "./receita.module.css";
export default function Receita(props) {
    return (
        <article className={styles.receita}>
            <img src={props.receita.imagemURL}/>
            <span>{props.receita.nome}</span>
        </article>
    );
}