import React, { useState } from "react";
import styles from "./criar-ingredientes.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import { useNavigate } from "react-router-dom";
import botaoRemover from "../../assets/remove-button.svg";
import { generatePath, gerarIdNumerico } from "../../lib/utils";


export default function CriarIngredientes() {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        setImagePreview('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
          alert("Por favor, selecione uma imagem.");
          return;
        }


        try {
            // Cria o FormData para enviar a imagem
            if (!image)
                throw new Error('uma imagem precisa ser enviada');

            const formData = new FormData();
            formData.append("images", image);  // 'image' é o arquivo selecionado pelo usuário
            // Faz o upload da imagem para o backend
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData
            });


            // Se o upload for bem-sucedido, captura a URL da imagem
            if (response.ok) {
                const dadosAPI = await response.json();
                const imageURL = dadosAPI.files;  // A URL que você recebe do backend

                const ingrediente = {
                    id: gerarIdNumerico(),
                    nome: nome,
                    imagemURL: imageURL[0].url,
                    path: generatePath('ingrediente', nome),
                };

                const dados = JSON.parse(localStorage.getItem('data'));
                const dadosIngredientes = dados.ingredientes;

                dadosIngredientes.push(ingrediente);
                dados.ingredientes = dadosIngredientes;

                localStorage.setItem('data', JSON.stringify(dados));
                alert("ingrediente salvo com sucesso!");
                navigate("/ingredientes");
                window.location.reload();
            } else {
                throw new Error("Erro no upload da imagem.");
            }
        } catch (error) {
            console.error("Erro ao enviar a receita:", error);
            alert("Erro ao enviar a receita.");
        }
    }

    const handleCancel = () => {
        navigate("/ingredientes");
    }

    return (

        <form method="POST" onSubmit={handleSubmit}>
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
                            required
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
                    <button className={`${styles.cancel_button} ${styles.button}`} onClick={handleCancel}>Cancelar</button>
                    <button className={`${styles.save_button} ${styles.button}`}>Enviar receta</button>
                </section>
            </div>
        </form>
    )
}