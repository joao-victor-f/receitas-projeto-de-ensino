import React from 'react';
import "./receita.css";
export default function Receita(props) {
    return (
        <article className="receita">
            <img src={props.receita.imagemURL}/>
            <span>{props.receita.nome}</span>
        </article>
    );
}