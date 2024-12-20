import React, { useState } from 'react';
import styles from './inputIngrediente.module.css';
import botaoRemover from "../../assets/remove-button.svg";
import ReOrder from "../../assets/re-order-button.svg";
import { medicoes } from '../../lib/constants';

export default function InputIngrediente ({ ingredientes, ingrediente, onChange, onRemove }) {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [medicao, setMedicao] = useState('');

    const handleChange = (e, field) => {
      const value = e.target.value;
      onChange(value, ingrediente.id, field);

      if (field === 'nome') {
        setNome(value);
      } else if (field === 'quantidade') {
        setQuantidade(value);
      } else if (field === 'medicao') {
        setMedicao(value);
      }
    };
  
    return (
      <div className={styles.input_adicionar_ingrediente}>
        {/* Botão de reorder */}
        <button>
          <img src={ReOrder} alt="botão reOrder" />
        </button>
  
        {/* Campo de nome */}
  
        {/* Campo de quantidade */}
        <input
          type="number"
          value={ingrediente.quantidade}
          onChange={(e) => handleChange(e, 'quantidade')}
          placeholder="Cantidad"
          className={styles.input_quantidade}
          required
        />
  
        {/* Campo de medição */}
        <select
          value={ingrediente.medicao}
          onChange={(e) => handleChange(e, 'medicao')}
          className={styles.input_medicao}
          required
        >
          <option selected disabled value="">Medicion</option>
          {medicoes.map(medicao => (
            <option value={medicao}>{medicao}</option>
          ))}
        </select>
  
        <select
          value={ingrediente.nome}
          onChange={(e) => handleChange(e, 'nome')}
          className={styles.input_produto}
          required
        >
          <option selected disabled value="">Selecione un producto</option>
          {ingredientes.map(ingrediente => (
            <option value={ingrediente.nome}>{ingrediente.nome}</option>
          ))}
        </select>

        {/* Botão de remover */}
        <button onClick={() => onRemove(ingrediente.id)}>
          <img src={botaoRemover} alt="botão remover" />
        </button>
      </div>
    );
  };