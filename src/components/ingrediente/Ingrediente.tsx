import React from 'react'
import styles from './ingrediente.module.css';

export default function Ingrediente(props) {
  return (
    <div className={styles.receita}> 
        <div className={styles.imagem_container}>
            <img src={props.ingrediente.imagemURL} alt={props.ingrediente.nome} className={styles.imagemReceita}/>
        </div>
        <p className={styles.nomeReceita}>{props.ingrediente.nome}</p>
    </div>
  )
}
