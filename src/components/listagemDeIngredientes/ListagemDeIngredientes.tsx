import React, { useState, useEffect } from 'react'
import styles from './listagem.module.css';
import Ingrediente from '../ingrediente/Ingrediente';
import { Link } from 'react-router-dom';

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
              <Link to={ingrediente.path}>
                <Ingrediente ingrediente={ingrediente} />
              </Link>
            ))}
        </div>
    </div>
  )
}
