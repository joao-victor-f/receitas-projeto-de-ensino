import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../../lib/data';
import { formatarIngrediente, formatarTempo } from '../../lib/utils';
import styles from './receita.module.css';
import { useNavigate } from 'react-router-dom';
import Carrossel from '../../components/carrossel/Carrossel';
import YouTubeIframe from '../../components/YoutubeIframe/YoutubeIframe';
import { Link } from 'react-router-dom';

export default function Receita() {
  const navigate = useNavigate();
  const [receita, setReceita] = useState<Receitas | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const receitasData = JSON.parse(localStorage.getItem('data')).receitas;

    const receitaEncontrada = receitasData.find(receita => receita.path == path);
    console.log(receitaEncontrada);

    if (!receitaEncontrada)
        return;

    setReceita(receitaEncontrada);
  }, [location.pathname]);

  if (!receita) {
    return (
        <section>
            <h1>Receta no existe.</h1>
        </section>
    )
  }

  const handleDelete = () => {
    const response = window.confirm('Você tem certeza que deseja deletar a receita?');

      if (response) {
          const categoria = receita.categoria;
          const dados = JSON.parse(localStorage.getItem('data'));
          let dadosReceita = dados.receitas;
          dadosReceita = dadosReceita.filter(receitaObj => receitaObj.path !== receita.path);
          console.log(dadosReceita);
          dados.receitas = dadosReceita;
          localStorage.setItem('data', JSON.stringify(dados))
          navigate(`${categoria.path}`);
          window.location.reload();
          console.log('hello ');
    }
  }

  return (
    <>
        <section className={styles.top_container}>
            <h1>{receita.nome}</h1>
            <div>
                <Link to={`/editar-receita/${receita.id}`}>
                    <button>
                        <img src="/imagens/icons/edit-icon.svg" />
                    </button>
                </Link>
                <button onClick={handleDelete}>
                    <img src="/imagens/icons/trash.svg" />
                </button>
            </div>
        </section>
        <section className={styles.image_container}>
            <Carrossel imagens={receita.imagensURL} />
        </section>
        <section className={styles.visao_geral_container}>
            <h1>Visión General</h1>
            <p>{receita.visaoGeral}</p>
        </section>
        {receita.videoId && (
            <section className={styles.iframe_container}>
                <h1>Mira un vídeo de la receta!</h1>
                <div className={styles.iframe}>
                    <YouTubeIframe videoId={receita.videoId} nomeReceita={receita.nome} />
                </div>
            </section>
        )}
        {receita.conselhos.length > 0 && (
            <section className={styles.conselhos_container}>
                <h1>Consejos de Cocina</h1>
                <ul>
                    {receita.conselhos.map(conselho => (
                        <li>
                            <span>{conselho}</span>
                        </li>
                    ))}
                </ul>
            </section>
        )}
        <section className={styles.info_container}>
            <div className={styles.info_main_container}>
                <div>
                    <img src="/imagens/icons/tray.png" />
                    <h3>Tiempo de Preparación</h3>
                    <span>{formatarTempo(receita.tempoDePreparacao)}</span>
                </div>
                <div className={styles.divider}></div>
                <div>
                    <img src="/imagens/icons/serving-dish.png" />
                    <h3>Raciones</h3>
                    <span>{receita.porcoes}</span>
                </div>
            </div>
        </section>
        <section className={styles.ingredientes_container}>
            <h1>Ingredientes</h1>
            <div className={styles.ingrediente_list_container}>
                {receita.ingredientes.map(ingrediente => (
                    <div className={styles.ingrediente_container}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="1" y="1" width="22" height="22" rx="11" stroke="#2E5834" stroke-width="2"/>
                            <path d="M12 6V18M6 12H18" stroke="#2E5834" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span>{formatarIngrediente(ingrediente)}</span>
                        <img src={ingrediente.ingrediente.imagemURL} />
                    </div>
                ))}
            </div>
        </section>
        {receita.substituicoes.length > 0 && (
            <section className={styles.substituicoes_container}>
                <h1>Substituciones</h1>
                <ul>
                    {receita.substituicoes.map(substituicao => (
                        <li>
                            <span>{substituicao}</span>
                        </li>
                    ))}
                </ul>
            </section>
        )}
        <section className={styles.instrucoes_container}>
            <h1>Instruciones</h1>
            <div className={styles.instrucoes_list}>
                {receita.passos.map((passo, i) => (
                    <div className={styles.instrucao_container}>
                        <div>
                            <span>{i+1}</span>
                        </div>
                        <div>
                            <p>{passo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}