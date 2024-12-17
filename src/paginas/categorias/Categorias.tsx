import { data } from '../../lib/data';
import React, { useEffect, useState} from 'react';
import styles from './categorias.module.css';
import ListagemDeCategorias from '../../components/listagemdereceitas/ListagemDeCategorias';
import Receita from '../../components/receita/Receita';
import { Receitas } from '../../lib/types';
import { Link } from 'react-router-dom';

export default function Categorias() {
    const [receitas, setReceitas] = useState<Receitas[] | undefined>();
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (!storedData)
            return;

        const parsedData = JSON.parse(storedData);

        setReceitas(parsedData.receitas);
    }, [setReceitas])
    return (
        <>
            <section className={styles.intro_receitas}> 
                <div className={styles.title_receitas}>
                    <h1>Recetas</h1>
                    <span>El sabor de Argentina a un clic: recetas, paso a paso y mucha inspiracion para tu cocina.</span>
                </div>
            </section>
            <ListagemDeCategorias></ListagemDeCategorias>
            <section id="historia_cozinha" className={styles.historia_cozinha}>
                <div className={styles.images_container}>
                    <img src="/categorias/img-suporte-2.png" alt="" />
                    <img src="/categorias/img-suporte-1.png" alt="" />
                </div>
                <div className={styles.historia_container}>
                    <h1>Historia de la cocina argentina</h1>
                    <p>La historia de la cocina argentina es un reflejo de su diversclassNamead cultural y geográfica. Influenciada por las tradiciones indígenas, como las de los pueblos guaraníes y mapuches, y enriquecida con la llegada de inmigrantes europeos, especialmente italianos y españoles, la gastronomía argentina combina sabores y técnicas únicas.</p>
                    <p>El asado, símbolo nacional, tiene raíces en la vclassNamea de los gauchos, quienes perfeccionaron la tradición de cocinar carnes al aire libre. A esto se suman platos emblemáticos como las empanadas, el locro y la milanesa, así como la influencia italiana en pastas y pizzas.</p>
                    <p>Además, la producción de vinos, especialmente en Mendoza, y el consumo de mate reflejan la conexión del país con su tierra y tradiciones. La cocina argentina sigue evolucionando, mezclando lo tradicional con la innovación, pero siempre conservando su classNameentidad única.</p>
                </div>
            </section>
            <section className={styles.recomendacao_receitas}>
                <h1>Recomendacion de recetas</h1>
                <div className={styles.receitas_container}>
                    <Link to={data.receitas[0].path}>
                        <Receita receita={data.receitas[0]} />
                    </Link>
                    <Link to={data.receitas[1].path}>
                        <Receita receita={data.receitas[1]} />
                    </Link>
                    <Link to={data.receitas[2].path}>
                        <Receita receita={data.receitas[2]} />
                    </Link>
                </div>
            </section>
        </>
    )
}