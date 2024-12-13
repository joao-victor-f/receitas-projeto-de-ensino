import React, { useState } from "react";
import styles from "./criar-ingredientes.module.css";
import botaoAdicionar from "../../assets/botao-adicionar.svg";
import { useNavigate } from "react-router-dom";


export default function CriarIngredientes() {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNome(e.target.value);
    };

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

                const ingrediente = {
                    nome: nome,
                    imagemURL: imageURL
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
        navigate("/");
    }

    return (

        <form method="POST" onSubmit={handleSubmit}>
            <div id={styles.moduloExternoCriarIngredientes}>
                <div id={styles.moduloInternoCriarIngredientes}>
                    <h1 id={styles.tituloCriarIngrediente}>Agregar ingrediente</h1>
                    <p id={styles.descricaoCriarIngredientes}>¡Súmale los ingredientes que no pueden faltar en la cocina argentina!</p>
                    <div id={styles.linhaDivisoria}></div>
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
                        <label id={styles.labelNomeIngrediente} className={styles.required}>Nombre del Ingrediente</label>
                        <input type="text" id={styles.inputNomeIngrediente} placeholder="Introduce el título de tu receta" onChange={(e) => handleChange(e)}value={nome} required/>
                    </div>
                    <div id={styles.botoes}>
                        <button id={styles.botaoCancelar} onClick={handleCancel}>Cancelar</button>
                        <button id={styles.botaoAgregarIngredientes} type="submit">Agregar Ingrediente</button>
                    </div>
                </div>
            </div>
        </form>
    )
}