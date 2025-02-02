import styled from "styled-components";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-top: 10.5px;
  padding-bottom: 10.5px;
  padding-left: 10.15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: transparent;
  background-image: url("/image/topbandera.png");
  
  img {
    max-width: 6.528rem;
    max-height: 6.5rem;
  }

  @media (max-width: 1024px) {
    padding: 2px;
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
      margin-left:25px;
    }
  }

  @media (max-width: 427px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 0px;
    img {
      max-width: 80%;
    }
  }
`;



const ContainerButtons = styled.section`
  display: flex;
  gap: 25px;
  padding-right: 51.15px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
    padding-right: 10.15px;
  }

  @media (max-width: 427px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-right: 0px;
  }
`;

const Header = () => {

  const { colorprimary, logo } = useContext(GlobalContext);

  return (
    <HeaderStyle theme={{ colorprimary }}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ContainerButtons>
        
      </ContainerButtons>
    </HeaderStyle>
  );
};
export default Header;
