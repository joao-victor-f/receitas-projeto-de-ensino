import React from 'react';
import styles from './ingredientes.module.css';
import alfajor from '../../assets/alfajor.jpg';

export default function Ingredientes() {
    return (
        <>
            <h1>Ingredientes</h1>
            <span>Los ingredientes que componen la cocina argentina</span>
            <span>+ AGREGAR INGREDIENTE</span>

            <div className={styles.fileiraDeReceitas}>
                <div className={styles.receita} id={styles.receitaUm}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaDois}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaTres}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
            </div>
            <div className={styles.fileiraDeReceitas}>
                <div className={styles.receita} id={styles.receitaUm}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaDois}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaTres}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
            </div>
            <div className={styles.fileiraDeReceitas}>
                <div className={styles.receita} id={styles.receitaUm}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaDois}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
                <div className={styles.receita} id={styles.receitaTres}>
                    <img src={alfajor} alt="Alfajor" />
                    <p>Alfajor</p>
                </div>
            </div>
        </>
    );
}