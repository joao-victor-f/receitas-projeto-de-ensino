import React from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import Divisor from "../../assets/Divider.svg";
import botaoRemover from "../../assets/remove-button.svg";
import ReOrder from "../../assets/re-order-button.svg";

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
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelNomeIngrediente} className={styles.required}>Ingredientes</label>
                    <p id={styles.descricaoLabel}>Enumere un ingrediente por línea, especificando cantidades (1, 2), medidas (tazas, cucharas) y cualquier detalle de preparación (picado, tamizado) junto con el artículo.</p>
                    <div id={styles.InputAgregarIngrediente}>
                        <button><img src={ReOrder} alt="botão reOrder I" /></button>
                        <input type="text" id={styles.inputCantidad} placeholder="Cantidad" />
                        <select id={styles.inputMedicion} name="Medicion">
                            <option value="Titulo">Medición</option>
                            <option value="g">G</option>
                            <option value="kg">KG</option>
                            <option value="hg">HG</option>
                        </select>
                        <input type="text" id={styles.inputProducto} placeholder="Producto" />
                        <button><img src={botaoRemover} alt="botão remover I" /></button>
                    </div>
                    <div id={styles.InputAgregarIngrediente}>
                        <button><img src={ReOrder} alt="botão reOrder I" /></button>
                        <input type="text" id={styles.inputCantidad} placeholder="Cantidad" />
                        <select id={styles.inputMedicion} name="Medicion">
                            <option value="Titulo">Medición</option>
                            <option value="g">G</option>
                            <option value="kg">KG</option>
                            <option value="hg">HG</option>
                        </select>
                        <input type="text" id={styles.inputProducto} placeholder="Producto" />
                        <button><img src={botaoRemover} alt="botão remover I" /></button>
                    </div>
                    <div id={styles.InputAgregarIngrediente}>
                        <button><img src={ReOrder} alt="botão reOrder I" /></button>
                        <input type="text" id={styles.inputCantidad} placeholder="Cantidad" />
                        <select id={styles.inputMedicion} name="Medicion">
                            <option value="Titulo">Medición</option>
                            <option value="g">G</option>
                            <option value="kg">KG</option>
                            <option value="hg">HG</option>
                        </select>
                        <input type="text" id={styles.inputProducto} placeholder="Producto" />
                        <button><img src={botaoRemover} alt="botão remover I" /></button>
                    </div>
                    <div id={styles.botaoAddIngrediente}>
                        <button><img src={botaoAdicionar} alt="botão adicionar I" /></button>
                        <span>Agregar ingredientes</span>
                    </div>
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelNomeIngrediente} className={styles.required}>Instrucciones</label>
                    <p id={styles.descricaoLabel}>Divide tu receta en instrucciones claras paso a paso.</p>
                    <div id={styles.InputPassos}>
                        <button><img src={ReOrder} alt="botão re-order" /></button>
                        <input type="text" id={styles.inputDescPasso} placeholder="Passo 1" />
                        <button><img src={botaoRemover} alt="botão remover I" /></button>
                    </div>
                    <div id={styles.InputPassos}>
                        <button><img src={ReOrder} alt="botão re-order" /></button>
                        <input type="text" id={styles.inputDescPasso} placeholder="Passo 2" />
                        <button><img src={botaoRemover} alt="botão remover I" /></button>
                    </div>
                    <div id={styles.botaoAddIngrediente}>
                        <button><img src={botaoAdicionar} alt="botão adicionar I" /></button>
                        <span>Agregar paso</span>
                    </div>
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelDescricao} className={styles.nonrequired}>Consejos de cocina</label>
                    <input type="text" id={styles.inputDescricao} placeholder="¡Comparte tus secretos de cocina! Trucos, intercambios o cualquier consejo sobre el horno para lograr el máximo éxito en la receta." />
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelDescricao} className={styles.nonrequired}>Categoría</label>
                    <select id={styles.inputNomeIngrediente} name="Tipo de comida">
                        <option value="descricao">Tipo de comida</option>
                        <option value="g">G</option>
                        <option value="hg">HG</option>
                    </select>
                </div>
                <div id={styles.botoes}>
                    <button id={styles.botaoCancelar}>Cancelar</button>
                    <button id={styles.botaoAgregarReceta}>Enviar receta</button>
                </div>
                <p id={styles.descricaoPaginaR}>Si ha encontrado esta receta en una revista, un libro de cocina o en otro sitio web, no podemos publicarla aquí. Nuestra plataforma se nutre de la originalidad y las recetas publicadas deben cumplir con nuestros principios. Mantengamos fluyendo la creatividad en la cocina con sus recetas únicas.</p>
            </div>
        </div>
    );
};
