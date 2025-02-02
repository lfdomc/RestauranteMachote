import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderStyle = styled.header`
  padding-top: 10.5px;

  display: flex;
  justify-content: center;
  background-color: #f0f0f0c7;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 6.528rem;
    max-height: 6.5rem;
    border-radius: 30px;
  }

  @media (max-width: 1024px) {
    
    img {
      max-width: 8rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 80%;
      margin-bottom: 15px;
      margin-left: 25px;
    }
  }

  @media (max-width: 427px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 80%;
    }
  }
`;

const ContainerButtons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 5px;
    justify-content: center;
  }

  @media (max-width: 427px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #000205;
  margin: 2px 0;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 427px) {
    font-size: 1rem;
  }
`;

const H4 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%; /* Ensure it takes up full width of the parent container */

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 427px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: black;
  width: 100%;
  box-sizing: border-box;
  padding: 0; /* Ensure no padding */
  margin: 0; /* Ensure no margin */
`;

const Footer = () => {
  const { logo } = useContext(GlobalContext);

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Logo " />
      </Link>

      <ContainerButtons>
        <Section>
          <H3>Telefono: +506 7045-3129</H3>
          <H3>Email: deliciasexpress2209@gmail.com</H3>
        </Section>
        <Section2>
          <H4>
            <a href="https://www.crtemsa.com" target="_blank" rel="noopener noreferrer">
              Copyright © 2025 Diseñado por Temsa
            </a> 
            | Todos los Derechos Reservados.
          </H4>
        </Section2>
      </ContainerButtons>
    </HeaderStyle>
  );
};

export default Footer;
