import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './searchBar.module.css';
import icon from "../../assets/icon.svg";

export default function SearchBar() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState<Receitas[]>([]);
  const [exibirResultados, setExibirResultados] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1); // Para gerenciar o item selecionado
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  // Função de debounce para melhorar a performance
  useEffect(() => {
    const receitasData = JSON.parse(localStorage.getItem('data')).receitas;
    console.log(receitasData);

    const timeoutId = setTimeout(() => {
      if (busca.trim()) {
        const resultadosFiltrados = receitasData.filter((receita) =>
          receita.nome.toLowerCase().includes(busca.toLowerCase())
        );
        setResultado(resultadosFiltrados);
        setExibirResultados(true);
      } else {
        setResultado([]);
        setExibirResultados(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [busca]);

  // Fechar a lista de resultados ao clicar fora do input
  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setExibirResultados(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Função para navegar para a página da receita
  const handleSelectRecipe = (path: string) => {
    if (window.location.pathname !== path) {
      navigate(path, {replace: true}); // Redireciona para a página da receita
    } else {
      navigate(0); // Isso recarrega a página, mas pode ser uma abordagem drástica
    }
    setBusca(""); // Limpa o campo de busca
    setExibirResultados(false); // Fecha a lista de resultados
  };

  // Funções para navegação com as teclas de seta
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, resultado.length - 1)); // Desce
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Sobe
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleSelectRecipe(resultado[selectedIndex].path); // Seleciona a receita ao apertar "Enter"
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Buscar receitas..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className={styles.input}
        />
        <img src={icon} />
      </div>

      {/* Lista flutuante de resultados */}
      {exibirResultados && resultado.length > 0 && (
        <ul className={styles.ul_encontrado}>
          {resultado.map((receita, index) => (
            <li
              key={index}
              className={styles.li_encontrado}
              style={{
                backgroundColor: selectedIndex === index ? "#f0f0f0" : "transparent", // Destaca o item selecionado
              }}
              onClick={() => handleSelectRecipe(receita.path)}
            >
              <div className={styles.description_container}>
                <span><strong>{receita.nome}</strong></span>
                <p>{receita.categoria.titulo}</p>
              </div>
              <img src={receita.imagensURL[0]} className={styles.imagem_receita}/>
            </li>
          ))}
        </ul>
      )}

      {/* Caso não encontre resultados */}
      {exibirResultados && resultado.length === 0 && busca.trim() !== "" && (
        <ul
          className={styles.ul_nao_encontrado}
        >
          <li className={styles.li_nao_encontrado}>
            Nenhuma receita encontrada
          </li>
        </ul>
      )}
    </div>
  );
};