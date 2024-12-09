import React from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";

export default function CriarReceitas () {
    return (
        <div id={styles.moduloExternoCriarIngredientes}>
        <div id={styles.moduloInternoCriarIngredientes}>
            <h1 id={styles.tituloCriarIngrediente}>Agregar ingrediente</h1>
            <p id={styles.descricaoCriarIngredientes}>¡Súmale los ingredientes que no pueden faltar en la cocina argentina!</p>
            <div id={styles.linhaDivisoria}></div>
            {/* As dimensões definidas para a imagem são provisórias. Servem somente para saber como fica o resultado. Elas 
            devem ser retiradas posteriormente para que se coloque uma imagem já com as dimensões definidas.
            */}
            <div id={styles.areaAdicionarImagem}>
                <div id={styles.botaoAdicionarImagem}>
                    <img src={botaoAdicionar} alt="botão adicionar"/>
                    <span>Añadir foto</span>
                </div>
            </div>
            <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelNomeIngrediente} className={styles.required}>Nombre del Ingrediente</label>
                <input type="text" id={styles.inputNomeIngrediente} placeholder="Introduce el título de tu receta"/>
            </div>
            <div id={styles.botoes}>
                <button id={styles.botaoCancelar}>Cancelar</button>
                <button id={styles.botaoAgregarIngredientes}>Agregar Ingrediente</button>
            </div>
        </div>
    </div> 
    );
};
