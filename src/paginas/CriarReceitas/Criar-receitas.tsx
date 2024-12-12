import React, {useState, useEffect } from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";

import { medicoes } from "../../lib/constants";
import InputIngrediente from "../../components/InputIngrediente/InputIngrediente";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InputPasso from "../../components/inputPasso/inputPasso";

export default function CriarReceitas() {
    const [dataIngredientes, setDataIngredientes] = useState<Ingrediente[]>([]);
    const [ingredientes, setIngredientes] = useState([
        { id: '1', nome: '', imagemURL: '', cantidad: '', medicion: '' },
    ]);

    const [passos, setPassos] = useState([
        { id: '1', passo: ''},
    ]) 
    
    // Função para atualizar os valores dos ingredientes
    const handleChangeIngredientes = (value, id, field) => {
        const updatedIngredientes = ingredientes.map((ingrediente) =>
            ingrediente.id === id ? { ...ingrediente, [field]: value } : ingrediente
        );
        setIngredientes(updatedIngredientes);
    };

    // Função para remover ingrediente
    const removeIngrediente = (id) => {
        setIngredientes(ingredientes.filter((ing) => ing.id !== id));
    };

    // Função para lidar com o evento de drag and drop
    const onDragEndIngredientes = (result) => {
        if (!result.destination) {
            return;
        }
    
        const items = [...ingredientes];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setIngredientes(items);
    };

    const onDragEndPassos = (result) => {
        if (!result.destination) {
            return;
        }
    
        const items = [...passos];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setPassos(items);

    }

    const removePasso = (id) => {
        setPassos(passos.filter((passo) => passo.id !== id));
    }

    const handleChangePasso = (value, id, field) => {
        const updatedPassos = passos.map((passo) =>
            passo.id === id ? { ...passo, [field]: value } : passo 
        );
        setPassos(updatedPassos);
    }

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const ingredientesStoredData = JSON.parse(storedData).ingredientes;
            setDataIngredientes(ingredientesStoredData);
        }
    });
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
                    <div id={styles.botaoAddIngrediente} onClick={() => setIngredientes([...ingredientes, { id: String(ingredientes.length + 1), nome: '', imagemURL: '', cantidad: '', medicion: '' }])}>
                        <button><img src={botaoAdicionar} alt="botão adicionar" /></button>
                        <span>Agregar ingredientes</span>
                    </div>
                    <DragDropContext onDragEnd={onDragEndIngredientes}>
                        <Droppable droppableId="droppable" direction="vertical">
                        {(provided) => (
                            <div
                            className={styles.droppableContainer}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            >
                            {ingredientes.map((ingrediente, index) => (
                                <Draggable key={ingrediente.id} draggableId={ingrediente.id} index={index}>
                                {(provided) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    >
                                    {/* Passa as funções e valores para o componente filho */}
                                    <InputIngrediente
                                        ingrediente={ingrediente}
                                        ingredientes={dataIngredientes}
                                        onChange={handleChangeIngredientes}  // Passa o handleChange como callback
                                        onRemove={removeIngrediente}  // Passa o removeIngrediente como callback
                                    />
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelNomeIngrediente} className={styles.required}>Instrucciones</label>
                    <p id={styles.descricaoLabel}>Divide tu receta en instrucciones claras paso a paso.</p>
                    <div id={styles.botaoAddIngrediente} onClick={() => setPassos([...passos, { id: String(passos.length + 1), passo: '' }])}>
                        <button><img src={botaoAdicionar} alt="botão adicionar I" /></button>
                        <span>Agregar paso</span>
                    </div>
                    <DragDropContext onDragEnd={onDragEndPassos}>
                        <Droppable droppableId="droppable" direction="vertical">
                        {(provided) => (
                            <div
                            className={styles.droppableContainer}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            >
                            {passos.map((passo, index) => (
                                <Draggable key={passo.id} draggableId={passo.id} index={index}>
                                {(provided) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    >
                                    {/* Passa as funções e valores para o componente filho */}
                                    <InputPasso
                                        passo={passo}
                                        onChange={handleChangePasso}  // Passa o handleChange como callback
                                        onRemove={removePasso}  // Passa o removeIngrediente como callback
                                    />
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelDescricao} className={styles.nonrequired}>Consejos de cocina</label>
                    <input type="text" id={styles.inputDescricao} placeholder="¡Comparte tus secretos de cocina! Trucos, intercambios o cualquier consejo sobre el horno para lograr el máximo éxito en la receta." />
                </div>
                <div id={styles.moduloInputNomeIngrediente}>
                    <label id={styles.labelDescricao} className={styles.nonrequired}>Categoría</label>
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
