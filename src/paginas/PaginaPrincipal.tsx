import React from "react";
import imagem from "../assets/mesadecomidasPG.png";
import imagem2 from "../assets/comidasdaPI.png";
import "./PaginaPrincipal.css";

export default function PaginaPrincipal () { 
  return (
    <>
    <section id ="BodyPI"> 
      <h1>De La Cocina</h1> 
      <br />
      <p>Descubre el rincón donde la pasión por la cocina argentina cobra vida:</p> <p>recetas fáciles, auténticas y llenas de sabor para transformar cada plato</p> <p>en una celebración.</p>  
    <br />
      <button id="BotaoSobrePI">Sobre nosotros</button> 
      <br />
      <br />
      <img id= "ImagemPI"src={imagem} alt="Imagem da mesa de comidas" />
    </section>
    
    <section id= "ContS2">
    <h1>Disfruta la cocina argentina</h1>
    <p>Descubre los sabores únicos de Argentina con nuestras recetas tradicionales y modernas. Desde el clásico asado hasta las deliciosas empanadas, explora lo mejor de nuestra gastronomía.</p>
    <h2>Dulzura argentina: Postres que conquistan</h2>
    <p>¿Te apasionan los postres? Aprende a preparar alfajores, flanes y otros dulces típicos que reflejan nuestra rica historia culinaria.</p>
    <h2>Sabores regionales que cuentan historias</h2>
    <p>Sumérgete en la cocina regional y conoce los secretos detrás de platos como el locro, las humitas y los tamales, herencia de nuestras raíces indígenas y criollas.</p>
        <div id="image-container">
        <img id= "ImagemPI2" src={imagem2} alt="Imagen de comida argentina" />
      </div>
    </section>
    </>
  ); 
}