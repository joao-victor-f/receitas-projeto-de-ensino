import React, { useState, useEffect } from 'react'
import { data } from '../../lib/data'
import styles from './listagem.module.css';
import Ingrediente from '../ingrediente/Ingrediente';

export default function ListagemDeIngredientes() {
  const [ingredientes, setIngredientes] = useState<Ingredientes[]>([]);

  useEffect(()=> {
    const ingredientes = JSON.parse(localStorage.getItem('data')).ingredientes;
    setIngredientes(ingredientes);
  }, [setIngredientes])
  return (
    <div id={styles.grupoReceitas}>
        <div className={styles.fileiraDeReceitas}>
            {ingredientes.map(ingrediente => (
                <Ingrediente ingrediente={ingrediente} />
            ))}
        </div>
    </div>
  )
}
