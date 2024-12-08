import React from "react";
import "./criar-receitas.module.css";

export default function CriarReceitas () {
    return (
        <div id="formulario-adicionar-receita">
            <div id="entradas-receita">
                <div id="foto-receita">
                    <div id="titulo-adicionar-receita">Agregar una receta</div>
                    <p id="descricao-receita">
                        ¿Te sientes como un Picasso de cocina? ¡Queremos ver tu obra maestra! Añade tu receta y muestra tu
                        creatividad culinaria.
                    </p>
                    <div id="enviar-imagem">
                        <div id="botao-adicionar-foto">
                            <div id="icone-foto"><img id="imagem-vetor" src="img/vector-6.svg" /></div>
                            <div id="texto-adicionar-foto">Añadir foto</div>
                        </div>
                    </div>
                    <img id="divisor-principal" src="img/divider-2.svg" />
                    <img id="divisor-secundario" src="img/divider.svg" />
                    <img id="divisor-terciario" src="img/divider-4.svg" />
                    <div id="porcoes-e-tempo">
                        <div id="entrada-porcoes">
                            <div id="rotulo-porcoes">
                                <div id="texto-rotulo-porcoes">Porciones</div>
                                <div id="asterisco-porcoes">*</div>
                            </div>
                            <div id="campo-entrada-porcoes">
                                <div id="input-porcoes"><div id="texto-input-porcoes">e.g., 4</div></div>
                            </div>
                        </div>
                        <div id="entrada-tempo-preparo">
                            <div id="rotulo-tempo">
                                <div id="texto-rotulo-tempo">Tiempo de preparación</div>
                                <div id="asterisco-tempo">*</div>
                            </div>
                            <div id="campo-tempo">
                                <div id="campo-horas">
                                    <div id="input-horas"><div id="texto-input-horas">hrs</div></div>
                                </div>
                                <div id="campo-minutos">
                                    <div id="input-minutos"><div id="texto-input-minutos">mins</div></div>
                                </div>
                            </div>
                        </div>
                        <div id="entrada-tempo-cozimento">
                            <div id="rotulo-cozimento">
                                <div id="texto-rotulo-cozimento">Tiempo de cocción</div>
                                <div id="asterisco-cozimento">*</div>
                            </div>
                            <div id="campo-cozimento">
                                <div id="campo-horas-cozimento">
                                    <div id="input-horas-cozimento"><div id="texto-input-horas-cozimento">hrs</div></div>
                                </div>
                                <div id="campo-minutos-cozimento">
                                    <div id="input-minutos-cozimento"><div id="texto-input-minutos-cozimento">mins</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="titulo-descricao-receita">
                        <div id="entrada-titulo">
                            <div id="rotulo-titulo">
                                <div id="texto-rotulo-titulo">Título de la receta</div>
                                <div id="asterisco-titulo">*</div>
                            </div>
                            <div id="campo-titulo">
                                <div id="input-titulo"><p id="texto-input-titulo">Introduce el título de tu receta</p></div>
                            </div>
                        </div>
                        <div id="entrada-descricao">
                            <div id="rotulo-descricao">
                                <div id="texto-rotulo-descricao">Descripción</div>
                                <div id="asterisco-descricao">*</div>
                            </div>
                            <div id="campo-descricao">
                                <div id="input-descricao"><p id="texto-input-descricao">Describe tu receta de una manera que haga la boca agua.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ingredientes">
                    <div id="secao-ingredientes">
                        <p id="texto-instrucao-ingredientes">
                            Enumere un ingrediente por línea, especificando cantidades (1, 2), medidas (tazas, cucharas) y cualquier
                            detalle de preparación (picado, tamizado) junto con el artículo.
                        </p>
                        <div id="rotulo-ingredientes">
                            <div id="texto-rotulo-ingredientes">Ingredientes</div>
                            <div id="asterisco-ingredientes">*</div>
                        </div>
                        <div id="lista-ingredientes">
                        </div>
                        <div id="botao-adicionar-ingrediente"><div id="texto-adicionar-ingrediente">+ Agregar ingrediente</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
