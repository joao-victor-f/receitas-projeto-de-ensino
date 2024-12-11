import React from 'react'
import { data } from '../../lib/data'
import styles from './listagem.module.css';
import Ingrediente from '../ingrediente/Ingrediente';

export default function ListagemDeIngredientes() {
  return (
    <div id={styles.grupoReceitas}>
        <div className={styles.fileiraDeReceitas}>
            {data.ingredientes.map(ingrediente => (
                <Ingrediente ingrediente={ingrediente} />
            ))}
        </div>
    </div>
  )
}
