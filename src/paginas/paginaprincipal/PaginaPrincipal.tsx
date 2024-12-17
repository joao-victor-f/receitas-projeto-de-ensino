import React from "react";
import imagem from "../../assets/mesadecomidasPG.png";
import imagem2 from "../../assets/comidasdaPI.png";
import styles from "./paginaPrincipal.module.css";
import { Link } from "react-router-dom";
import Categoria from "../../components/categoriaPaginaPrincipal/Categoria";
import { data } from "../../lib/data";
import Feedback from "../../components/feedback/Feedback";

export default function PaginaPrincipal () { 
  return (
    <>
      <section className={styles.intro_container}>
        <h1>De La Cocina</h1>
        <p>Descubre el rincón donde la pasión por la cocina argentina cobra vida: recetas fáciles, auténticas y llenas de sabor para transformar cada plato en una celebración.</p>
        <Link to="/sobre">
          <a>Sobre Nosotros</a>
        </Link>
      </section>
      <section className={styles.image_container}>
        <img src={imagem} />
      </section>
      <section className={styles.receitas_container}>
        <div className={styles.receitas_container_header}>
          <h1>Recetas</h1>
          <Link id={styles.botao_ver_mais} to="/categorias/">
            <a>Ver más</a>
          </Link>
        </div>
        <div className={styles.categorias_container}>
          <Link to={data.categorias[4].path}>
            <Categoria categoria={data.categorias[4]} imagem="/paginaprincipal/alfajor.png"/>
          </Link>
          <Link to={data.categorias[5].path}>
            <Categoria categoria={data.categorias[5]} imagem="/paginaprincipal/pastel.png" />
          </Link>
          <Link to={data.categorias[6].path}>
            <Categoria categoria={data.categorias[6]} imagem="/paginaprincipal/pratos_principais.png"/>
          </Link>
        </div>
      </section>
      <section className={styles.descricao_container}>
        <div className={styles.texts_container}>
          <div className={styles.description_text_container}>
            <h3>Disfruta la cocina argentina</h3>
            <p>Descubre los sabores únicos de Argentina con nuestras recetas tradicionales y modernas. Desde el clásico asado hasta las deliciosas empanadas, explora lo mejor de nuestra gastronomía.</p>
          </div>
          <div className={styles.description_text_container}>
            <h3>Dulzura argentina: Postres que conquistan</h3>
            <p>¿Te apasionan los postres? Aprende a preparar alfajores, flanes y otros dulces típicos que reflejan nuestra rica historia culinaria.</p>
          </div>
          <div className={styles.description_text_container}>
            <h3>Sabores regionales que cuentan historias</h3>
            <p>Sumérgete en la cocina regional y conoce los secretos detrás de platos como el locro, las humitas y los tamales, herencia de nuestras raíces indígenas y criollas.</p>
          </div>
        </div>
        <div className={styles.descricao_imagem_container}>
          <img src={imagem2} />
        </div>
      </section>
      <section className={styles.feedbacks_container}>
        <h1>Feedbacks</h1>
        <div className={styles.feedbacks_listing}>
          <Feedback comentario={`“Muy buena receta, pero ajusté un poco las especias.”`} usuario={`Luis Martinez`} imagem="/icons/luismartinez.svg" />
          <Feedback comentario={`“Fácil de seguir y el resultado fue delicioso. ¡Gracias!”`} usuario={`Ana Gutiérrez`} imagem="/icons/anagutierrez.svg" />
          <Feedback comentario={`“Perfecta para sorprender a los invitados. ¡Me encantó!”`} usuario={`Sofia Ramirez`} imagem="/icons/sofiaramirez.svg" />
        </div>
      </section>
    </>
  );
}