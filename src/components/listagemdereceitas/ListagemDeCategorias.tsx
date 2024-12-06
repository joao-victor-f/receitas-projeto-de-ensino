import React from 'react';
import "./listagemDeCategorias.css";
import { data } from '../../lib/data';
import Categoria from '../categoria/Categoria';
export default function ListagemDeCategorias() {
    return (
        <section id="listagem-receitas">
            <h1>Tipos de comida</h1>
            <div id="container-receitas">
                {data.categorias.map(categoria => {
                    return (
                        <>
                            <Categoria categoria={categoria} />
                        </>
                    )
                })}
            </div>
        </section>
    );
}