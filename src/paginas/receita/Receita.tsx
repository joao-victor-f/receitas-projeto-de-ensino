import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../../lib/data';
import { formatarTempo } from '../../lib/utils';

export default function Receita() {
  const [receita, setReceita] = useState<Receitas | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const receitaEncontrada = data.receitas.find(receita => receita.path == path);
    console.log(receitaEncontrada);

    if (!receitaEncontrada)
        return;

    setReceita(receitaEncontrada);
  }, []);

  if (!receita) {
    return (
        <section>
            <h1>Receita não encontrada!</h1>
        </section>
    )
  }
  return (
    <>
        <section>
            <h1>{receita.nome}</h1>
            <div>
                <button>
                    <img src="/icons/edit-icon.svg" />
                </button>
                <button>
                    <img src="/icons/trash.svg" />
                </button>
            </div>
        </section>
        <section>
            <img src={receita.imagemURL} />
        </section>
        <section>
            <h1>Visión General</h1>
            <p>{receita.visaoGeral}</p>
        </section>
        <section>
            <h1>Consejos de Cocina</h1>
            <ul>
                {receita.conselhos.map(conselho => (
                    <li>
                        <span>{conselho}</span>
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <div>
                <img src="/icons/tray.png" />
                <h3>Tiempo de Preparación</h3>
                <span>{formatarTempo(receita.tempoDePreparacao)}</span>
            </div>
            <div>
                <img src="/icons/serving-dish.png" />
                <h3>Raciones</h3>
                <span>{receita.porcoes}</span>
            </div>
        </section>
        <section>
            <h1>Substituciones</h1>
            <ul>
                {receita.substituicoes.map(substituicao => (
                    <li>
                        <span>{substituicao}</span>
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <h1>Instruciones</h1>
            <ol>
                {receita.passos.map(passo => (
                    <li>
                        <span>{passo}</span>
                    </li>
                ))}
            </ol>
        </section>
    </>
  )
}