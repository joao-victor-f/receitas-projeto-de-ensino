import React, { useState, useEffect } from 'react'
import styles from './ingrediente.module.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Receita from '../../components/receita/Receita';

export default function Ingrediente() {
    const [ingrediente, setIngrediente] = useState<Ingrediente | undefined>(undefined);
    const [receitas, setReceitas] = useState<Receitas[] | undefined>(undefined);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        const dados = JSON.parse(localStorage.getItem('data'));

        const dadosIngredientes: Ingrediente[] = dados.ingredientes;

        const ingredienteEncontrado = dadosIngredientes.find(ingredienteObj => ingredienteObj.path === path);

        if (!ingredienteEncontrado)
            return;

        const receitas = dados.receitas;
        const receitasComIngrediente = receitas.filter(receita => receita.ingredientes.some(item => item.ingrediente.nome === ingredienteEncontrado.nome));

        setReceitas(receitasComIngrediente);

        setIngrediente(ingredienteEncontrado);
    }, [setIngrediente, setReceitas]);

    const handleDelete = () => {
        const response = window.confirm('Você tem certeza que deseja deletar o ingrediente?');
        if (response) {
            const dados = JSON.parse(localStorage.getItem('data'));
            let dadosIngrediente = dados.ingredientes;
            dadosIngrediente = dadosIngrediente.filter(ingredienteObj => ingredienteObj.path !== ingrediente.path);
            console.log(dadosIngrediente);
            dados.ingredientes = dadosIngrediente;
            localStorage.setItem('data', JSON.stringify(dados))
            navigate('/ingredientes');
            window.location.reload();
            console.log('hello ');
        }
    }
    return (
        <>
        {ingrediente ? (
            <>
                <section className={styles.top_container}>
                    <h1>{ingrediente.nome}</h1>
                    <div>
                        <Link to={`/editar-ingrediente/${ingrediente.id}`}>
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
                    <img src={ingrediente.imagemURL} />
                </section>
                {receitas && (
                <section className={styles.receitas_header_container}>
                    <h1>Receitas</h1>
                    <div className={styles.receitas_container}>
                        {receitas.length > 0 && receitas.map(receita => (
                            <Link to={receita.path}>
                                <Receita receita={receita} />
                            </Link>
                        ))}
                    </div>
                </section>
                )}
            </>
        ) : (
            <>
                <div>
                    <h1>Ingrediente no existe.</h1>
                </div>
            </>
        )}
        </>
    )
}
