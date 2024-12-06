import React from 'react';

export default function Categoria(props) {
  return (
    <div className="categoria-container">
        <img src={props.categoria.imagemURL} />
        <div className="details-container">
            <h3>{props.categoria.titulo}</h3>
            <span>{props.categoria.descricao}</span>
        </div>
    </div>
  )
}

