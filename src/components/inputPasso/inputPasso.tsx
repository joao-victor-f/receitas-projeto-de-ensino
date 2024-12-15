import React, { useState } from 'react'
import styles from './inputPasso.module.css';
import ReOrder from "../../assets/re-order-button.svg";
import botaoRemover from "../../assets/remove-button.svg";

export default function InputPasso({passo, onChange, onRemove}) {
    const [nome, setNome] = useState('');
    const handleChange = (e, field) => {
        setNome(e.target.value);
        onChange(e.target.value, passo.id, field);
    }

    return (
        <div className={styles.passos_container}>
            <div className={styles.passo_input_container}>
                <button><img src={ReOrder} alt="botão re-order" /></button>
                <input
                    type="text"
                    id={styles.input_descricao}
                    value={nome}
                    placeholder="Descreva seu passo"
                    onChange={(e) => handleChange(e, 'passo')}
                    required
                />
                <button onClick={() => onRemove(passo.id)} className={styles.botao_remover}>
                    <img src={botaoRemover} alt={`botão remover ${passo.id}`} />
                </button>

            </div>
        </div>
    )
}
