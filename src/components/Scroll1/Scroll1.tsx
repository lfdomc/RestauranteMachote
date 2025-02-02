import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden; // Evita cualquier espacio adicional
`;

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
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false, // Deshabilita el centrado que puede agregar margen
  variableWidth: false, // Asegura que los slides se ajusten bien
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Scroll1: React.FC = () => (
  <SliderWrapper>
    <Slider {...settings}>
      {[
        "sopas",
        "tacobirria",
        "tacotico",
        "nachos",
        "ktripapas",
        "fajitas",
        "ktriburguer",
        "patacones",
      ].map((img, index) => (
        <SlideContainer key={index}>
          <Img src={`/image/ktrina/${img}.jpg`} alt={`Imagen ${index + 1}`} />
        </SlideContainer>
      ))}
    </Slider>
  </SliderWrapper>
);

export default Scroll1;
