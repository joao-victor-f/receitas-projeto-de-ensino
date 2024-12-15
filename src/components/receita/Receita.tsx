import React from 'react';
import styles from "./receita.module.css";
import { formatarTempo } from '../../lib/utils';
import Carrossel from '../carrossel/Carrossel';

export default function Receita(props) {
    return (
        <article className={styles.receita}>
            <div className={styles.receita_container}>
                <img src={props.receita.imagensURL[0]}/>
                <span>{props.receita.nome}</span>
            </div>
            <div className={styles.info_container}>
                <div className={styles.ingredientes_container}>
                    <img src="/icons/ingredientes.svg" />
                    <span>{`${props.receita.ingredientes.length} ingredientes`}</span>
                </div>
                <div className={styles.tempo_container}>
                    <img src="/icons/relogio.svg" />
                    <span>{`${formatarTempo(props.receita.tempoDePreparacao)}`}</span>
                </div>
            </div>
            <div className={styles.cozinhar_container}>
                <a>Cocinar</a>
                <img src="/icons/panela.svg" />
            </div>
        </article>
    );
}