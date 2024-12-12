import React from 'react';
import styles from './inputIngrediente.module.css';
import botaoRemover from "../../assets/remove-button.svg";
import ReOrder from "../../assets/re-order-button.svg";
import { medicoes } from '../../lib/constants';

export default function InputIngrediente ({ ingredientes, ingrediente, onChange, onRemove }) {
    const handleChange = (e, field) => {
      onChange(e.target.value, ingrediente.id, field);
    };
  
    return (
      <div className={styles.InputAgregarIngrediente}>
        {/* Botão de reorder */}
        <button>
          <img src={ReOrder} alt="botão reOrder" />
        </button>
  
        {/* Campo de nome */}
        <select
          value={ingrediente.nome}
          onChange={(e) => handleChange(e, 'nome')}
          className={styles.inputProducto}
        >
          <option selected disabled value="">selecione um ingrediente</option>
          {ingredientes.map(ingrediente => (
            <option value={ingrediente.nome}>{ingrediente.nome}</option>
          ))}
        </select>
  
        {/* Campo de quantidade */}
        <input
          type="text"
          value={ingrediente.cantidad}
          onChange={(e) => handleChange(e, 'cantidad')}
          placeholder="Quantidade"
          className={styles.inputCantidad}
        />
  
        {/* Campo de medição */}
        <select
          value={ingrediente.medicion}
          onChange={(e) => handleChange(e, 'medicion')}
          className={styles.inputMedicion}
        >
          <option selected disabled value="">Medição</option>
          {medicoes.map(medicao => (
            <option value={medicao}>{medicao}</option>
          ))}
        </select>
  
        {/* Botão de remover */}
        <button onClick={() => onRemove(ingrediente.id)}>
          <img src={botaoRemover} alt="botão remover" />
        </button>
      </div>
    );
  };