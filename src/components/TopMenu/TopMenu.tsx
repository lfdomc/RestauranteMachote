import styled from "styled-components";

import MenuHeader from "../Header/MenuHeader/MenuHeader";



const Section = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;
const SectionA = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding-right :20px;
`;

const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #2e0143;
  padding: 2px;
  gap: 10px;
`;



const Img = styled.img`
width: 40px;

&:hover {
    background-color: #821f82;
   
    
    transform: scale(1.05);
  }
    
`

function TopMenu() {

  return (
    <Section>

      <Nav>
        <MenuHeader />
        <SectionA>
          <button>
            <Img src="/image/Redes/instagramw.png" alt="instagram" onClick={() => window.location.href = "https://www.instagram.com/restaurantedeliciaslaktrina_/"} />
          </button>
          <button>
            <Img src="/image/Redes/fbw.png" alt="facebook" onClick={() => window.location.href = "https://www.facebook.com/deliciaslaktrina"} />
          </button>

        </SectionA>


      </Nav>

    </Section>


  );
}

export default TopMenu;
