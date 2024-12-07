import React from 'react';
import styles from './ingredientes.module.css';
import alfajor from '../../assets/alfajor.jpg';

export default function Ingredientes() {
    return (
        <>
            <h1>Ingredientes</h1>
            <span>Los ingredientes que componen la cocina argentina</span>
            <span>+ AGREGAR INGREDIENTE</span>

            <div id={styles.grupoReceitas}>
                <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasUm}>
                    <div className={styles.receita} id={styles.receitaUm}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaDois}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaTres}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                </div>
                <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasDois}>
                    <div className={styles.receita} id={styles.receitaQuatro}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaCinco}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaSeis}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                </div>
                <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasTres}>
                    <div className={styles.receita} id={styles.receitaSete}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaOito}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                    <div className={styles.receita} id={styles.receitaNove}>
                        <img src={alfajor} alt="Alfajor" className={styles.imagemReceita}/>
                        <p className={styles.nomeReceita}>Alfajor</p>
                    </div>
                </div>
            </div>
        </>
    );
}