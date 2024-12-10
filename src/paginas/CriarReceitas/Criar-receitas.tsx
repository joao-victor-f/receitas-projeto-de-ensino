import React from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import Divisor from "../../assets/Divider.svg";

export default function CriarReceitas() {
    return (
        <div id={styles.moduloExternoCriarIngredientes}>
            <div id={styles.moduloInternoCriarIngredientes}>
                <h1 id={styles.tituloCriarIngrediente}>Agregar recetas</h1>
                <p id={styles.descricaoCriarIngredientes}>¿Te sientes como un Picasso de cocina? ¡Queremos ver tu obra maestra! Añade tu receta y muestra tu creatividad culinaria.</p>
                <div id={styles.linhaDivisoria}></div>
                {/* As dimensões definidas para a imagem são provisórias. Servem somente para saber como fica o resultado. Elas 
            devem ser retiradas posteriormente para que se coloque uma imagem já com as dimensões definidas.
            */}
                <div id={styles.areaAdicionarImagem}>
                    <div id={styles.botaoAdicionarImagem}>
                        <img src={botaoAdicionar} alt="botão adicionar" />
                        <span>Añadir foto</span>
                    </div>
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelNomeIngrediente} className={styles.required}>Título de la receta</label>
                    <input type="text" id={styles.inputNomeIngrediente} placeholder="Introduce el título de tu receta" />
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelDescricao} className={styles.required}>Descripción</label>
                    <input type="text" id={styles.inputDescricao} placeholder="Describe tu receta de una manera que haga la boca agua." />
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelPorciones} className={styles.required}>Porciones</label>
                    <input type="text" id={styles.inputPorciones} placeholder="e.g.,4" />
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelTiempoP} className={styles.required}>Tiempo de preparación</label>
                    <input type="text" id={styles.inputTiempoP} placeholder="hrs" />
                    <input type="text" id={styles.inputTiempoP2} placeholder="min" />
                </div>
                <div id={styles.botoes}>
                    <button id={styles.botaoCancelar}>Cancelar</button>
                    <button id={styles.botaoAgregarIngredientes}>Agregar Ingrediente</button>
                </div>
            </div>
        </div>
    );
};
