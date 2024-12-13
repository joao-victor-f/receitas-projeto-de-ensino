import React, {useState, useEffect } from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import { useNavigate } from "react-router-dom";
import { medicoes } from "../../lib/constants";
import InputIngrediente from "../../components/InputIngrediente/InputIngrediente";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InputPasso from "../../components/inputPasso/inputPasso";
import { data } from "../../lib/data";
import { formatarHorario, generateRecipePath } from "../../lib/utils";

export default function CriarReceitas() {
    const navigate = useNavigate();
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [dataIngredientes, setDataIngredientes] = useState<Ingrediente[]>([]);
    const [ingredientes, setIngredientes] = useState([
        { id: '1', nome: '', imagemURL: '', quantidade: '', medicao: '' },
    ]);

    const [passos, setPassos] = useState([
        { id: '1', passo: ''},
    ]) 


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            // Cria a URL para visualização do arquivo
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }

    }

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [porcoes, setPorcoes] = useState<number>();
    const [horas, setHoras] = useState<number>();
    const [minutos, setMinutos] = useState<number>();
    const [conselhos, setConselhos] = useState('');
    const [categoria, setCategoria] = useState('');

    // Função para atualizar os valores dos ingredientes
    const handleChangeIngredientes = (value, id, field) => {
        const updatedIngredientes = ingredientes.map((ingrediente) =>
            ingrediente.id === id ? { ...ingrediente, [field]: value } : ingrediente
        );
        console.log(updatedIngredientes);
        setIngredientes(updatedIngredientes);
    };

    const handleChange = (e, field) => {
        const value = e.target.value;
        if (field === 'titulo')
            setTitulo(value);
        else if (field === 'descricao')
            setDescricao(value);
        else if (field === 'porcoes')
            setPorcoes(value);
        else if (field === 'horas')
            setHoras(value);
        else if (field === 'minutos')
            setMinutos(value);
        else if (field === 'conselhos')
            setConselhos(value);
        else if (field == 'categoria')
            setCategoria(value);
    }
    
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
    }, [setDataIngredientes]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
          alert("Por favor, selecione uma imagem.");
          return;
        }

        // Cria o FormData para enviar a imagem
        const formData = new FormData();
        formData.append("file", image);  // 'image' é o arquivo selecionado pelo usuário

        try {
            // Faz o upload da imagem para o backend
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData
            });

            // Se o upload for bem-sucedido, captura a URL da imagem
            if (response.ok) {
                const dadosAPI = await response.json();
                const imageURL = dadosAPI.imageURL;  // A URL que você recebe do backend

                // Agora cria o objeto da receita com a URL da imagem
                const ingredientesFormatados = ingredientes.map(({ id, nome, imagemURL, quantidade, medicao }) => ({
                    ingrediente: { nome, imagemURL: dataIngredientes.find(ingrediente => ingrediente.nome === nome)?.imagemURL },
                    quantidade,
                    medicao
                }));

                const passosFormatados = passos.map(passo => passo.passo);
                console.log(passosFormatados)

                const receita = {
                    nome: titulo,
                    categoria: data.categorias.find(categoriaObj => categoriaObj.titulo === categoria),
                    descricao: descricao,
                    ingredientes: ingredientesFormatados,
                    imagemURL: imageURL,  // A URL da imagem agora é armazenada aqui
                    tempoDePreparacao: formatarHorario(horas, minutos),
                    passos: passosFormatados,
                    path: generateRecipePath(titulo),
                    substituicoes: [],
                    conselhos: [conselhos],
                    visaoGeral: descricao,
                    porcoes: porcoes
                };

                // Recupera os dados existentes do localStorage e atualiza
                const dados = JSON.parse(localStorage.getItem('data'));
                const receitas = dados.receitas;
                receitas.push(receita);
                dados.receitas = receitas;

                // Salva os dados no localStorage
                localStorage.setItem('data', JSON.stringify(dados));

                alert("Receita salva com sucesso!");
                navigate("/categorias");
                window.location.reload();
            } else {
                throw new Error("Erro no upload da imagem.");
            }
        } catch (error) {
            console.error("Erro ao enviar a receita:", error);
            alert("Erro ao enviar a receita.");
        }
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div id={styles.moduloExternoCriarIngredientes}>
                <div id={styles.moduloInternoCriarIngredientes}>
                    <h1 id={styles.tituloCriarIngrediente}>Agregar recetas</h1>
                    <p id={styles.descricaoCriarIngredientes}>¿Te sientes como un Picasso de cocina? ¡Queremos ver tu obra maestra! Añade tu receta y muestra tu creatividad culinaria.</p>
                    <div id={styles.linhaDivisoria}></div>
                    {/* As dimensões definidas para a imagem são provisórias. Servem somente para saber como fica o resultado. Elas 
            devem ser retiradas posteriormente para que se coloque uma imagem já com as dimensões definidas.
            */}
                    <div id={styles.areaAdicionarImagem}>
                        {/* Label estilizado que simula o botão */}
                        <label htmlFor="botaoAdicionarImagem" id={styles.botaoAdicionarImagem}>
                            <img src={botaoAdicionar} alt="botão adicionar" />
                            <span>Añadir foto</span>
                        </label>
                        <input
                            id="botaoAdicionarImagem"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }} // Esconde o input
                            required
                        />
                        {/* Pré-visualização da imagem */}
                        {imagePreview && (
                            <div>
                                <h3>Pré-visualização:</h3>
                                <img src={imagePreview} alt="Pré-visualização" style={{ maxWidth: "300px" }} />
                            </div>
                        )}
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelNomeIngrediente} className={styles.required}>Título de la receta</label>
                        <input type="text" id={styles.inputNomeIngrediente} value={titulo} placeholder="Introduce el título de tu receta" onChange={(e) => handleChange(e, 'titulo')} />
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelDescricao} className={styles.required}>Descripción</label>
                        <input type="text" id={styles.inputDescricao} value={descricao} placeholder="Describe tu receta de una manera que haga la boca agua." onChange={(e) => handleChange(e, 'descricao')} />
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelPorciones} className={styles.required}>Porciones</label>
                        <input type="number" id={styles.inputPorciones} placeholder="e.g.,4" value={porcoes} onChange={(e) => handleChange(e, 'porcoes')} />
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelTiempoP} className={styles.required}>Tiempo de preparación</label>
                        <input type="number" id={styles.inputTiempoP} placeholder="hrs" value={horas} onChange={(e) => handleChange(e, 'horas')} />
                        <input type="number" id={styles.inputTiempoP2} placeholder="min" value={minutos} onChange={(e) => handleChange(e, 'minutos')} />
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelNomeIngrediente} className={styles.required}>Ingredientes</label>
                        <p id={styles.descricaoLabel}>Enumere un ingrediente por línea, especificando cantidades (1, 2), medidas (tazas, cucharas) y cualquier detalle de preparación (picado, tamizado) junto con el artículo.</p>
                        <div id={styles.botaoAddIngrediente} onClick={() => setIngredientes([...ingredientes, { id: String(ingredientes.length + 1), nome: '', imagemURL: '', quantidade: '', medicao: '' }])}>
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
                        <input type="text" id={styles.inputDescricao} placeholder="¡Comparte tus secretos de cocina! Trucos, intercambios o cualquier consejo sobre el horno para lograr el máximo éxito en la receta." value={conselhos} onChange={(e) => handleChange(e, 'conselhos')} />
                    </div>
                    <div id={styles.moduloInputNomeIngrediente}>
                        <label id={styles.labelDescricao} className={styles.nonrequired}>Categoría</label>
                        <select value={categoria} id={styles.inputNomeIngrediente} onChange={(e) => handleChange(e, 'categoria')}>
                            <option value=''>selecione uma</option>
                            {data.categorias.map(categoria => (
                                <option value={categoria.titulo}>{categoria.titulo}</option>
                            ))}
                        </select>
                    </div>
                    <div id={styles.botoes}>
                        <button id={styles.botaoCancelar}>Cancelar</button>
                        <button id={styles.botaoAgregarReceta}>Enviar receta</button>
                    </div>
                    <p id={styles.descricaoPaginaR}>Si ha encontrado esta receta en una revista, un libro de cocina o en otro sitio web, no podemos publicarla aquí. Nuestra plataforma se nutre de la originalidad y las recetas publicadas deben cumplir con nuestros principios. Mantengamos fluyendo la creatividad en la cocina con sus recetas únicas.</p>
                </div>
            </div>

        </form>
    );
};
