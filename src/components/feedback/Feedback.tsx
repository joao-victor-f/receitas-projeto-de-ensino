import React from 'react';
import styles from './feedback.module.css';

export default function Feedback(props) {
    return (
        <article className={styles.feedback_container}>
            <p>{props.comentario}</p>
            <div className={styles.feedback_description_container}>
                <img src={props.imagem} />
                <div className={styles.feedback_autor_data_container}>
                    <span id={styles.username}>{props.usuario}</span>
                    <span>usuario</span>
                </div>
            </div>
        </article>
    );
}