import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import styles from '../criaringredientes/criar-ingredientes.module.css';
import { Ingrediente } from '../../lib/types';
import { gerarIdNumerico, generatePath } from '../../lib/utils';
import botaoRemover from "../../assets/remove-button.svg";
import botaoAdicionar from "../../assets/botao-adicionar.svg";

export default function EditarIngrediente() {
    const navigate = useNavigate();
    const { idIngrediente } = useParams();
    const [ingrediente, setIngrediente] = useState<Ingrediente>();
    const [image, setImage] = useState<File | null>(null);
    const [nome, setNome] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        console.log(idIngrediente);

        if (!storedData || !idIngrediente)
            return;

        const parsedData = JSON.parse(storedData);
        const ingredientes = parsedData.ingredientes; 
        const ingredienteEncontrado: Ingrediente = ingredientes.find(ingrediente => ingrediente.id === parseInt(idIngrediente));

        if (!ingredienteEncontrado)
            return;

        setIngrediente(ingredienteEncontrado);
        setNome(ingredienteEncontrado.nome);
        setImagePreview(ingredienteEncontrado.imagemURL);
    }, [setNome, setImagePreview])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!(image || imagePreview)) {
            alert('Por favor seleccione una image');
            return;
        }

        if (image) {
            try {
                // Cria o FormData para enviar a imagem

                const formData = new FormData();
                formData.append("images", image);  // 'image' é o arquivo selecionado pelo usuário
                // Faz o upload da imagem para o backend
                const response = await fetch("http://10.225.6.108/uploads", {
                    method: "POST",
                    body: formData
                });


                // Se o upload for bem-sucedido, captura a URL da imagem
                if (response.ok) {
                    const dadosAPI = await response.json();
                    const imageURL = dadosAPI.files;  // A URL que você recebe do backend

                    const ingredienteObj = {
                        nome: nome,
                        imagemURL: imageURL[0].url,
                    };

                    const ingredienteFinal = {...ingrediente, ...ingredienteObj};
                    const dados = JSON.parse(localStorage.getItem('data'));
                    const dadosIngredientes = dados.ingredientes;

                    const ingredienteIndex = dadosIngredientes.findIndex(ingredienteObj => ingredienteObj.id === parseInt(idIngrediente));

                    if (ingredienteIndex !== -1) {
                        dadosIngredientes[ingredienteIndex] = {
                            ...ingrediente,
                            ...ingredienteObj
                        };
                    };

                    dados.ingredientes = dadosIngredientes;

                    localStorage.setItem('data', JSON.stringify(dados));
                    alert("ingrediente atualizado com sucesso!");
                    navigate("/ingredientes");
                    window.location.reload();
                } else {
                    throw new Error("Erro no upload da imagem.");
                }
            } catch (error) {
                console.error("Erro ao enviar a receita:", error);
                alert("Erro ao enviar a receita.");
            }
        } else {
            const dados = JSON.parse(localStorage.getItem('data'));
            const dadosIngredientes = dados.ingredientes;

            const ingredienteIndex = dadosIngredientes.findIndex(ingredienteObj => ingredienteObj.id === parseInt(idIngrediente));

            if (ingredienteIndex !== -1) {
                dadosIngredientes[ingredienteIndex] = {
                    ...ingrediente,
                    nome: nome
                };
            };

            dados.ingredientes = dadosIngredientes;

            localStorage.setItem('data', JSON.stringify(dados));
            alert("ingrediente atualizado com sucesso!");
            navigate("/ingredientes");
            window.location.reload();
        }
    }

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        setImagePreview('');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/ingredientes');
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            // Cria a URL para visualização do arquivo
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }

    }
    return (
        <>
            {ingrediente ? (
                <form onSubmit={handleSubmit}>
                    <div className={styles.outer_container}>
                        <section className={styles.main_topic_container}>
                            <h1>Agregar ingrediente</h1>
                            <p className={styles.paragrafo}>¡Súmale los ingredientes que no pueden faltar en la cocina argentina!</p>
                        </section>
                        <div className={styles.linha_divisoria}></div>
                        <section className={styles.adicionar_img_container}>
                            <label className={styles.button_adicionar_img} htmlFor="botaoAdicionarImagem">
                                <img src={botaoAdicionar} />
                                <span>Añadir foto</span>
                                <input
                                    id="botaoAdicionarImagem"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </section>
                        <div className={styles.linha_divisoria}></div>
                        <div className={styles.images}>
                            {imagePreview && (
                                <div className={styles.image_preview_container}>
                                    <img src={imagePreview} alt={`preview-${imagePreview}}`} className={styles.image_preview} />
                                    <button
                                        className={styles.delete_image_preview}
                                        onClick={(e) => handleRemove(e)}
                                    >
                                        <img src={botaoRemover} />
                                    </button>
                                </div>
                            )}
                        </div>
                        <section className={styles.input_container}>
                            <label className={styles.label_input}>Nome del ingrediente</label>
                            <input
                                type="text"
                                value={nome}
                                placeholder="Introduce el nome del"
                                onChange={(e) => handleChange(e)}
                                className={styles.input_titulo}
                            />
                        </section>
                        <section className={styles.end_container}>
                            <button className={`${styles.cancel_button} ${styles.button}`} onClick={(e) => handleCancel(e)}>Cancelar</button>
                            <button className={`${styles.save_button} ${styles.button}`}>Enviar receta</button>
                        </section>
                    </div>
                </form>
            ) : (
                <>
                    <div>
                        <h1>Ingrediente no existe</h1>
                    </div>
                </>
            )}
        </>
    )
}
