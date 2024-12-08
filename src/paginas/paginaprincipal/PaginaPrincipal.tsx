import React from "react";
import imagem from "../../assets/mesadecomidasPG.png";
import imagem2 from "../../assets/comidasdaPI.png";
import styles from "./paginaPrincipal.module.css";
import { Link } from "react-router-dom";

export default function PaginaPrincipal () { 
  return (
    <>
    <section id={styles.BodyPI}> 
      <h1>De La Cocina</h1> 
      <br />
      <p>Descubre el rincón donde la pasión por la cocina argentina cobra vida:recetas fáciles, auténticas y llenas de sabor para transformar cada plato en una</p><p> celebración.</p>  
      <br />
      <Link to="/sobre">
        <button id={styles.BotaoSobrePI}>Sobre nosotros</button> 
      </Link>
      <br />
      <br />
      <img id={styles.ImagemPI} src={imagem} alt="Imagem da mesa de comidas" />
    </section>
    
    <section id={styles.ContS2}>
      <div id={styles.textoS2}>
        <h1>Disfruta la cocina argentina</h1>
        <p>Descubre los sabores únicos de Argentina con nuestras recetas</p> <p>tradicionales y modernas. Desde el clásico asado hasta las</p><p>deliciosas empanadas, explora lo mejor de nuestra gastronomía.</p>
        <h2>Dulzura argentina: Postres que conquistan</h2>
        <p>¿Te apasionan los postres? Aprende a preparar alfajores, flanes</p> <p>y otros dulces típicos que reflejan nuestra rica historia culinaria.</p>
        <h2>Sabores regionales que cuentan historias</h2>
        <p>Sumérgete en la cocina regional y conoce los secretos detrás de </p><p> platos como el locro, las humitas y los tamales, herencia de </p> <p>nuestras raíces indígenas y criollas.</p>
      </div>
          <div id={styles.image_container}>
          <img id={styles.ImagemPI2} src={imagem2} alt="Imagen de comida argentina" />
      </div>
    </section>
    </>
  );
}