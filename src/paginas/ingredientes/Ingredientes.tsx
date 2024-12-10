import React from 'react';
import styles from './ingredientes.module.css';
import cacao from '../../assets/cacao.jpg';
import aveia from '../../assets/aveia.jpg';
import arroz from '../../assets/arroz.png';
import miel from '../../assets/miel.jpg';
import huevo from '../../assets/huevo.jpg';
import esenciavainilla from '../../assets/esenciavainilla.jpg';
import chocolate from '../../assets/chocolate.jpg';
import leche from '../../assets/leche.jpg';
import manteca from '../../assets/manteca.jpg';
import imagemDoHeader from '../../assets/imagemDoHeader.jpg';
import { Link } from "react-router-dom";


export default function Ingredientes() {
    return (
        <>
            <div id={styles.conteudoReceitas}>
                <div id={styles.conteudoHeader}>
                    <img src={imagemDoHeader} alt="Ingredientes" id={styles.imagemDoHeader}/>
                    <div id={styles.textoHeader}>
                        <h1 id={styles.tituloIngredientes}>Ingredientes</h1>
                        <span id={styles.descricaoHeader}>Los ingredientes que componen la cocina argentina</span>
                    </div>
                </div>
                <Link to="/criar-ingredientes">
                    <a id={styles.inserirIngrediente}>+ AGREGAR INGREDIENTE</a>
                </Link>
                <div id={styles.grupoReceitas}>
                    <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasUm}>
                        <div className={styles.receita} id={styles.receitaUm}>
                            <img src={aveia} alt="Havena de avena" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Havena de avena</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaDois}>
                            <img src={arroz} alt="Havena de arroz" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Havena de Arroz</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaTres}>
                            <img src={cacao} alt="Cacao en povo 100%" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Cacao en povo 100%</p>
                        </div>
                    </div>
                    <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasDois}>
                        <div className={styles.receita} id={styles.receitaQuatro}>
                            <img src={miel} alt="Miel" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Miel</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaCinco}>
                            <img src={huevo} alt="Huevo" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Huevo</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaSeis}>
                            <img src={esenciavainilla} alt="Esencia de vainilla" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Esencia de vainilla</p>
                        </div>
                    </div>
                    <div className={styles.fileiraDeReceitas} id={styles.fileiraDeReceitasTres}>
                        <div className={styles.receita} id={styles.receitaSete}>
                            <img src={chocolate} alt="Chocolate 70% cacao" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Chocolate 70% cacao</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaOito}>
                            <img src={leche} alt="Leche" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Leche</p>
                        </div>
                        <div className={styles.receita} id={styles.receitaNove}>
                            <img src={manteca} alt="Manteca" className={styles.imagemReceita}/>
                            <p className={styles.nomeReceita}>Manteca</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}