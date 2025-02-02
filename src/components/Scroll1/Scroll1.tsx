import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const Img = styled.img`
  height: 600px;
  width: 500px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 450px;
    width: 400px;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 4800,
  slidesToShow: 3, // Mostrar 3 imágenes al mismo tiempo
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // En pantallas medianas, muestra 2 imágenes
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // En móviles, solo 1 imagen
      },
    },
  ],
};

const Scroll1: React.FC = () => (
  <Slider {...settings}>
    <SlideContainer>
      <Img src="/image/ktrina/sopas.jpg" alt="Formulario" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/tacobirria.jpg" alt="Imagen 2" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/tacotico.jpg" alt="Imagen 3" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/nachos.jpg" alt="Imagen 4" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/ktripapas.jpg" alt="Imagen 4" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/fajitas.jpg" alt="Imagen 4" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/ktriburguer.jpg" alt="Imagen 4" />
    </SlideContainer>
    <SlideContainer>
      <Img src="/image/ktrina/patacones.jpg" alt="Imagen 4" />
    </SlideContainer>
  </Slider>
);

export default Scroll1;
