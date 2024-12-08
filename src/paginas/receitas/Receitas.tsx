<<<<<<< HEAD
import React from 'react';
export default function Receitas() {
    return (
        <h1>Receitas</h1>
=======
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../lib/data';
import { Link } from 'react-router-dom';
import Receita from '../../components/receita/Receita';
import styles from './receitas.module.css';

export default function Receitas() {
    const location = useLocation();
    const [categoria, setCategoria] = useState<Categoria | undefined>(undefined);
    const [receitas, setReceitas] = useState<Receitas[] | undefined>([]);



    useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath);
        const categoriaEncontrada = data.categorias.find((categoria) => categoria.path == currentPath);
        setCategoria(categoriaEncontrada);

        if (!categoriaEncontrada) {
            return;
        }
        const receitasEncontradas = data.receitas.filter((receita) => receita.categoria.titulo == categoriaEncontrada.titulo);
        if (!receitasEncontradas) {
            return;
        }
        setReceitas(receitasEncontradas);
        console.log(receitasEncontradas);
    }, [setCategoria, setReceitas])
    return (
        <>
            <section>
                {categoria ? (
                    <div className={styles.image_container} style={{backgroundImage: `url(${categoria.fullImagemURL})`}}>
                        <h1>{categoria.titulo}</h1>
                        <p>{categoria.descricao}</p>
                    </div>
                ) : (
                    <div>
                        <h1>Categoria não encontrada!</h1>
                    </div>
                )}
            </section>
            <section className={styles.section}>
                <div className={styles.criar_container}>
                    <Link to="/receitas/criar-receita">
                        <a>+ AGREGAR RECETA</a>
                    </Link>
                </div>
                <div className={styles.receitas_container}>
                    {(receitas && receitas.length > 0) ?
                        receitas.map(receita => {
                            return (
                                <>
                                    <Link to={receita.path}>
                                        <Receita receita={receita}></Receita>
                                    </Link>
                                </>
                            )
                        }) : (
                            <div>
                                <h1>Não há receitas no momento!</h1>
                            </div>
                        )}
                </div>
            </section>
        </>
>>>>>>> 0671990cfbf8920b0297a403bde775041a6a77cf
    );
}