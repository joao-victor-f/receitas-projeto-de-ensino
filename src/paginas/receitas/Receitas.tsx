import React from 'react';
import "./Receitas.css";
export default function Receitas() {
    return (
        <>
            <section id="container">
                <h1>Formulario de Envío de Recetas</h1>
                <div id="form-group">
                    <label htmlFor="title">Título de la Receta *</label>
                    <input type="text" id="title" placeholder="Introduce un título corto y claro"></input>
                </div>
                <div id="form-group">
                    <label htmlFor="description">Descripción *</label>
                    <textarea id="description" placeholder="Describe tu receta"></textarea>
                </div>
                <div id="form-group">
                    <label htmlFor="ingredients">Ingredientes *</label>
                    <textarea id="ingredients" placeholder="Enumera los ingredientes"></textarea>
                </div>
                <div id="form-group">
                    <label htmlFor="instructions">Instrucciones *</label>
                    <textarea id="instructions" placeholder="Instrucciones paso a paso"></textarea>
                </div>
                <button id="add-photo">Añadir Foto</button>
                <button id="add-step">Añadir Paso</button>
                <button id="add-video-image">Añadir Video/Imagen</button>
                <button id="submit">Enviar Receta</button>
                <button id="cancel">Cancelar</button>
            </section>
        </>
    );
}