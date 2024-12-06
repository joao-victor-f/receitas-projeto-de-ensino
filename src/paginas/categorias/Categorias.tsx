import { data } from '../../lib/data';
import React from 'react';
import './categorias.css';
import ListagemDeCategorias from '../../components/listagemdereceitas/ListagemDeCategorias';
import Receita from '../../components/receita/Receita';

export default function Categorias() {
    return (
        <>
            <section id="intro-receitas">
                <div id="title-receitas">
                    <h1>Recetas</h1>
                    <span>El sabor de Argentina a un clic: recetas, paso a paso y mucha inspiracion para tu cocina.</span>
                </div>
                <div>
                    <a href="#">+ AGREGAR RECETA</a>
                </div>
            </section>
            <ListagemDeCategorias></ListagemDeCategorias>
            <section id="historia-cozinha">
                <div id="images-container">
                    <img src="/categorias/img-suporte-2.png" alt="" />
                    <img src="/categorias/img-suporte-1.png" alt="" />
                </div>
                <div id="historia-container">
                    <h1>Historia de la cocina argentina</h1>
                    <p>La historia de la cocina argentina es un reflejo de su diversidad cultural y geográfica. Influenciada por las tradiciones indígenas, como las de los pueblos guaraníes y mapuches, y enriquecida con la llegada de inmigrantes europeos, especialmente italianos y españoles, la gastronomía argentina combina sabores y técnicas únicas.</p>
                    <p>El asado, símbolo nacional, tiene raíces en la vida de los gauchos, quienes perfeccionaron la tradición de cocinar carnes al aire libre. A esto se suman platos emblemáticos como las empanadas, el locro y la milanesa, así como la influencia italiana en pastas y pizzas.</p>
                    <p>Además, la producción de vinos, especialmente en Mendoza, y el consumo de mate reflejan la conexión del país con su tierra y tradiciones. La cocina argentina sigue evolucionando, mezclando lo tradicional con la innovación, pero siempre conservando su identidad única.</p>
                </div>
            </section>
            <section id="recomendacao-receitas">
                <h1>Recomendacion de recetas</h1>
                <div className="receitas-container">
                    <Receita receita={data.receitas[0]} />
                    <Receita receita={data.receitas[1]} />
                    <Receita receita={data.receitas[2]} />
                </div>
            </section>
        </>
    )
}