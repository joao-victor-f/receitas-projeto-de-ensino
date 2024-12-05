import React from "react";
import imagem from "../assets/mesadecomidasPG.png";
import "./PaginaPrincipal.css";

export default function PaginaPrincipal () { 
  return ( 
    <div id ="BodyPI"> 
      <h1>De La Cocina</h1> 
      <br />
      <p>Descubre el rincón donde la pasión por la cocina argentina cobra vida:</p> <p>recetas fáciles, auténticas y llenas de sabor para transformar cada plato</p> <p>en una celebración.</p>  
    <br />
      <button id="BotaoSobrePI">Sobre nosotros</button> 
      <br />
      <br />
      <img id= "ImagemPI"src={imagem} alt="Imagem da mesa de comidas" />
    </div> 
  ); 
}