import React from 'react';
import './receitas.css';
import ListagemDeReceitas from '../../components/listagemdereceitas/ListagemDeCategorias';

export default function Receitas() {
    return (
        <>
            <section id="intro-receitas">
                <div id="title-receitas">
                    <h1>Recetas</h1>
                    <span>El sabor de Argentina a un clic: recetas, paso a paso y mucha inspiracion para tu cocina.</span>
                </div>
                <div>
                    <a href="#">+ AGREGAR RECETA</a>
                </div>
            </section>
            <ListagemDeReceitas></ListagemDeReceitas>
        </>
    )
}