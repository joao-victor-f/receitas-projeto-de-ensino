import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";

export default function({ imagens }) {
  const [isZoomOpen, setZoomOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      >
        {imagens.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px", // Altura do slide
                cursor: "pointer",
              }}
              onClick={() => {
                setZoomOpen(true);
                setCurrentIndex(index);
              }}
            >
              <img
                src={image} // Atualizado para usar a propriedade url
                alt={`slide ${index}`} // Atualizado para usar a propriedade nome
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Estilizando as setas */}
        <div
          className="swiper-button-next"
          style={{ color: "black", fontSize: "20px" }}
        />
        <div
          className="swiper-button-prev"
          style={{ color: "black", fontSize: "20px" }}
        />
      </Swiper>

            {/* Lightbox para Zoom */}
            {isZoomOpen && (
                <Lightbox
                    open={isZoomOpen}
                    close={() => setZoomOpen(false)}
                    slides={imagens.map(image => ({ src: image }))}
                    plugins={[Zoom]}
                    index={currentIndex}
                    zoom={{ maxZoomPixelRatio: 3 }} // Define o nível máximo de zoom
                    on={{
                        view: ({ index }) => setCurrentIndex(index), // Atualiza o índice ao navegar
                        click: () => {
                            // Alterna entre zoom in e zoom out ao clicar
                            const zoomLevel = document.querySelector(".yarl__zoom-container").style.transform;
                            if (zoomLevel && zoomLevel !== "none") {
                              document.querySelector(".yarl__zoom-container").style.transform = "none";
                            } else {
                              document.querySelector(".yarl__zoom-container").style.transform = "scale(2)"; // Define um nível fixo
                            }
                          },
                    }}
                />
            )}
        </>
    );
};