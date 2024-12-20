import React, {useState, useEffect } from "react";
import styles from "./criar-receitas.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import { useNavigate } from "react-router-dom";
import InputIngrediente from "../../components/InputIngrediente/InputIngrediente";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InputPasso from "../../components/inputPasso/inputPasso";
import { data } from "../../lib/data";
import botaoRemover from "../../assets/remove-button.svg";
import { formatarHorario, generatePath, gerarIdNumerico } from "../../lib/utils";

export default function CriarReceitas() {
    const navigate = useNavigate();
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const [dataIngredientes, setDataIngredientes] = useState<Ingrediente[]>([]);
    const [ingredientes, setIngredientes] = useState([
        { id: '1', nome: '', imagemURL: '', quantidade: '', medicao: '' },
    ]);

    const [passos, setPassos] = useState([
        { id: '1', passo: '' }
    ]);

    const handleRemove = (index, e) => {
        e.preventDefault();
        // Remove o arquivo e seu preview pela posição
        setImages((prev) => prev.filter((_, i) => i !== index));
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const removeConselho = (e) => {
        e.preventDefault();
        setConselhos(conselhos.slice(0, -1));
    };

    const removeSubstituicao = (e) => {
        e.preventDefault();
        setSubstituicoes(substituicoes.slice(0, -1));
    }

    const handleFileChange = (e) => {
        const newImages: File[] = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...newImages] );
    
        // Gerar URLs temporárias para o preview
        const previewUrls = newImages.map((file) => URL.createObjectURL(file));
        setImagePreviews((previousPreviewUrls) => [...previousPreviewUrls, ...previewUrls]);
    };

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [porcoes, setPorcoes] = useState<number>();
    const [horas, setHoras] = useState<number>();
    const [minutos, setMinutos] = useState<number>();
    const [conselhos, setConselhos] = useState<string[]>([]);
    const [substituicoes, setSubstituicoes] = useState<string[]>([]);
    const [categoria, setCategoria] = useState('');
    const [link, setLink] = useState('');
    const [videoId, setVideoId] = useState('');

    // Função para atualizar os valores dos ingredientes
    const handleChangeIngredientes = (value, id, field) => {
        const updatedIngredientes = ingredientes.map((ingrediente) =>
            ingrediente.id === id ? { ...ingrediente, [field]: value } : ingrediente
        );
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
        else if (field == 'link')
            setLink(value)
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

    const handleChangeConselhos = (value, index) => {
        const newConselhos = [...conselhos];
        newConselhos[index] = value;
        setConselhos(newConselhos);
    };

    const handleChangeSubstituicoes = (value, index) => {
        const newSubstituicoes = [...conselhos];
        newSubstituicoes[index] = value;
        setSubstituicoes(newSubstituicoes);
    };

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const ingredientesStoredData = JSON.parse(storedData).ingredientes;
            setDataIngredientes(ingredientesStoredData);
        }
    }, [setDataIngredientes]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Cria o FormData para enviar a imagem
        const formData = new FormData();

        let videoId: String | null = null; // Inicializando a variável local

        const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+|(?:v|e(?:mbed)?)\/|(?:watch\?v=))([a-zA-Z0-9_-]{11}))/;
        const match = link.match(regex);

        if (match && match[1]) {
            videoId = match[1]; // Atribui o ID se o link for válido
        }

        if (!(ingredientes.length > 0)) {
            alert("la receta necesita de un ingrediente");
            return;
        }

        if (!(passos.length > 0)) {
            alert('la receta necesita de un paso');
            return;
        }

        if (!(horas >= 0 || minutos >= 0)) {
            alert('digite um intervalo de tempo válido');
            return;
        }

        images.forEach(image => formData.append('images', image));

        try {
            // Faz o upload da imagem para o backend
            const response = await fetch("http://10.225.6.108/api/upload", {
                method: "POST",
                body: formData
            });

            // Se o upload for bem-sucedido, captura a URL da imagem
            if (response.ok) {
                const dadosAPI = await response.json();
                const imagensURL = dadosAPI.files;  // A URL que você recebe do backend

                // Agora cria o objeto da receita com a URL da imagem
                const ingredientesFormatados = ingredientes.map(({ id, nome, imagemURL, quantidade, medicao }) => ({
                    ingrediente: { nome, imagemURL: dataIngredientes.find(ingrediente => ingrediente.nome === nome)?.imagemURL },
                    quantidade,
                    medicao
                }));

                const passosFormatados = passos.map(passo => passo.passo);

                const imagensFormatadas = imagensURL.map(imagem => imagem.url);

                const receita = {
                    id: gerarIdNumerico(),
                    nome: titulo,
                    categoria: data.categorias.find(categoriaObj => categoriaObj.titulo === categoria),
                    descricao: descricao,
                    ingredientes: ingredientesFormatados,
                    imagensURL: imagensFormatadas,  // A URL da imagem agora é armazenada aqui
                    tempoDePreparacao: formatarHorario(horas, minutos),
                    passos: passosFormatados,
                    path: generatePath('receita', titulo),
                    substituicoes: substituicoes,
                    conselhos: conselhos,
                    visaoGeral: descricao,
                    porcoes: porcoes,
                    videoId: videoId,
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
            alert("Erro ao enviar a receita. " + error);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/categorias');
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className={styles.outer_container}>
                <section className={styles.main_topic_container}>
                    <h1>Agregar una receta</h1>
                    <p className={styles.paragrafo}>¿Te sientes como un Picasso de cocina? ¡Queremos ver tu obra maestra! Añade tu receta y muestra tu creatividad culinaria.</p>
                </section>
                <div className={styles.linha_divisoria}></div>
                <section className={styles.adicionar_img_container}>
                    <label className={styles.button_adicionar_img} htmlFor="botaoAdicionarImagem">
                        <img src={botaoAdicionar} />
                        <span>Añadir foto</span>
                        <input
                            id="botaoAdicionarImagem"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            required
                        />
                    </label>
                </section>
                <section className={styles.media_section}>
                    <label className={styles.label_input}>Media</label>
                    <div className={styles.linha_divisoria}></div>
                    <div className={styles.images}>
                        {imagePreviews.map((url, index) => (
                            <div key={index} className={styles.image_preview_container}>
                                <img src={url} alt={`preview-${index}`} className={styles.image_preview} />
                                <button
                                    className={styles.delete_image_preview}
                                    onClick={(e) => handleRemove(index, e)}
                                >
                                    <img src={botaoRemover} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.linha_divisoria}></div>
                </section>

                <section className={styles.input_container}>
                    <label className={styles.label_input}>Título de la receta</label>
                    <input
                        type="text"
                        value={titulo}
                        placeholder="Introduce el título de tu receta!"
                        onChange={(e) => handleChange(e, 'titulo')}
                        className={styles.input_titulo}
                        required
                    />
                </section>
                <section className={styles.input_container}>
                    <label className={styles.label_input}>Link para video de Youtube</label>
                    <input
                        type="text"
                        value={link}
                        placeholder="Introduce el link de un video de tu receta!"
                        onChange={(e) => handleChange(e, 'link')}
                        className={styles.input_titulo}
                    />
                </section>
                <section className={styles.input_container}>
                    <label className={styles.label_input}>Descrípcion</label>
                    <textarea
                        rows={10}
                        cols={120}
                        value={descricao}
                        placeholder="Describe tu receta de una manera que haga la boca agua."
                        onChange={(e) => handleChange(e, 'descricao')}
                        className={styles.input_descricao}
                    />
                </section>
                <section className={styles.minor_info_container1}>
                    <label className={styles.label_input}>Porciones</label>
                    <input
                        type="number"
                        className={styles.input_porcoes}
                        placeholder="e.g.,4"
                        value={porcoes}
                        onChange={(e) => handleChange(e, 'porcoes')}
                        required
                    />
                </section>
                <section className={styles.minor_info_container2}>
                    <label className={styles.label_input}>Tiempo de preparación</label>
                    <div>
                        <input
                            type="number"
                            className={styles.input_tempo}
                            placeholder="hrs"
                            value={horas}
                            onChange={(e) => handleChange(e, 'horas')}
                            required
                        />
                        <input
                            type="number"
                            className={styles.input_tempo}
                            placeholder="min"
                            value={minutos}
                            onChange={(e) => handleChange(e, 'minutos')}
                            required
                        />

                    </div>
                </section>
                <section className={styles.ingredientes_main_container}>
                    <div className={styles.ingredientes_header_container}>
                        <label className={styles.label_input}>Ingredientes</label>
                        <p>Enumere un ingrediente por línea, especificando cantidades (1, 2), medidas (tazas, cucharas) y cualquier detalle de preparación (picado, tamizado) junto con el artículo.</p>
                    </div>
                    <div className={styles.adicionar_ingrediente_container}>
                        <div className={styles.botao_add_ingrediente} onClick={() => setIngredientes([...ingredientes, { id: String(ingredientes.length + 1), nome: '', imagemURL: '', quantidade: '', medicao: '' }])}>
                            <span>+</span>
                        </div>
                    </div>
                    <div className={styles.linha_divisoria}></div>
                    <div className={styles.ingredientes_container}>
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
                    <div className={styles.linha_divisoria}></div>
                </section>
                <section className={styles.ingredientes_main_container}>
                    <div className={styles.ingredientes_header_container}>
                        <label className={styles.label_input}>Instrucciones</label>
                        <p className={styles.paragrafo}>Enumere un ingrediente por línea, especificando cantidades (1, 2), medidas (tazas, cucharas) y cualquier detalle de preparación (picado, tamizado) junto con el artículo.</p>
                    </div>
                    <div className={styles.adicionar_ingrediente_container}>
                        <div className={styles.botao_add_ingrediente} onClick={() => setPassos([...passos, { id: String(passos.length + 1), passo: '', }])}>
                            <span>+</span>
                        </div>
                    </div>
                    <div className={styles.linha_divisoria}></div>
                    <div className={styles.passos_container}>
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
                    <div className={styles.linha_divisoria}></div>
                </section>
                <section className={styles.conselhos_container}>
                    <div className={styles.ingredientes_header_container}>
                        <label className={styles.label_input}>Consejos de cocina</label>
                        <p className={styles.paragrafo}>¡Comparte tus secretos de cocina! Trucos, intercambios o cualquier consejo sobre el horno para lograr el máximo éxito en la receta.</p>
                    </div>
                    <div className={styles.adicionar_ingrediente_container}>
                        <div className={styles.botao_add_ingrediente} onClick={() => { setConselhos([...conselhos, ""]) }}>
                            <span>+</span>
                        </div>
                    </div>
                    <div className={styles.linha_divisoria}></div>
                    <div className={styles.conselhos_input_container}>
                        {conselhos.map((conselho, index) => (
                            <div className={styles.conselhos_input_list}>
                                <input
                                    key={index + 1}
                                    type="text"
                                    value={conselho}
                                    onChange={(e) => handleChangeConselhos(e.target.value, index)}
                                    placeholder="Su consejo"
                                    className={styles.input_titulo}
                                    required
                                />
                                <button onClick={(e) => removeConselho(e)}>
                                    <img src={botaoRemover} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.linha_divisoria}></div>
                </section>
                <section className={styles.conselhos_container}>
                    <div className={styles.ingredientes_header_container}>
                        <label className={styles.label_input}>Substituciones</label>
                        <p className={styles.paragrafo}>¡Comparte tus sustituciones de ingredientes! Aquí puedes proponer alternativas para adaptarse a diferentes gustos o necesidades, haciendo la receta más versátil.</p>
                    </div>
                    <div className={styles.adicionar_ingrediente_container}>
                        <div className={styles.botao_add_ingrediente} onClick={() => { setSubstituicoes([...substituicoes, ""]) }}>
                            <span>+</span>
                        </div>
                    </div>
                    <div className={styles.linha_divisoria}></div>
                    <div className={styles.conselhos_input_container}>
                        {substituicoes.map((substituicao, index) => (
                            <div className={styles.conselhos_input_list}>
                                <input
                                    key={index + 1}
                                    type="text"
                                    value={substituicao}
                                    onChange={(e) => handleChangeSubstituicoes(e.target.value, index)}
                                    placeholder="Su substitucion"
                                    className={styles.input_titulo}
                                    required
                                />
                                <button onClick={(e) => removeSubstituicao(e)}>
                                    <img src={botaoRemover} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.linha_divisoria}></div>
                </section>
                <section className={styles.categoria_container}>
                    <label className={styles.label_input}>Categoría</label>
                    <select value={categoria} className={styles.categoria_select} onChange={(e) => handleChange(e, 'categoria')} required>
                        <option value=''>Tipo de comida</option>
                        {data.categorias.map(categoria => (
                            <option value={categoria.titulo}>{categoria.titulo}</option>
                        ))}
                    </select>
                </section>
                <section className={styles.end_container}>
                    <button className={`${styles.cancel_button} ${styles.button}`} onClick={(e)=> handleCancel(e)}>Cancelar</button>
                    <button className={`${styles.save_button} ${styles.button}`}>Enviar receta</button>
                </section>
                <div className={styles.linha_divisoria}></div>
                <p className={styles.ending_paragraph}>Si ha encontrado esta receta en una revista, un libro de cocina o en otro sitio web, no podemos publicarla aquí. Nuestra plataforma se nutre de la originalidad y las recetas publicadas deben cumplir con nuestros principios. Mantengamos fluyendo la creatividad en la cocina con sus recetas únicas.</p>
            </div>
        </form>
    );
};
