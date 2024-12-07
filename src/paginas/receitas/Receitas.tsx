import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../lib/data';
import { Link } from 'react-router-dom';
import Receita from '../../components/receita/Receita';
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
        <section>
            {(receitas && receitas.length > 0) && 
                receitas.map(receita => {
                    return (
                        <Link to={receita.path}>
                            <Receita receita={receita}></Receita>
                        </Link>
                    )
                })
            }
        </section>
    );
}