import React from 'react';
import styles from './categoria.module.css';


export default function Categoria(props) {
  return (
    <div className={styles.categoria_container}>
        <img src={props.categoria.imagemURL} />
        <div className={styles.details_container}>
            <h3>{props.categoria.titulo}</h3>
            <span>{props.categoria.descricao}</span>
        </div>
    </div>
  )
}

