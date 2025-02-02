import styled from "styled-components";

const H1 = styled.h1<{ $bgColor: string, $fColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fColor};
  width: auto;
  padding: 10px 20px;
  font-family: "Dosis", serif;
  text-align: center;
  font-size: 5.5rem;
  font-weight:900;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Banner = styled.div<{ $bgColor: string, $fColor: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${(props) => props.$bgColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100px;
  gap: 2px;
  padding: 0px;
  

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2px;
  }
`;


interface Info {
  image?: string;
  h1?: string;
  color: string;
  fcolor: string;
}

const Banner3 = ({  h1, color, fcolor }: Info) => {
  return (
    <Banner $bgColor={color} $fColor={fcolor}>
     
      <H1 $bgColor={color} $fColor={fcolor}>{h1}</H1>
    </Banner>
  );
};

export default Banner3;
