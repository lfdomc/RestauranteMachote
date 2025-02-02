import styled from "styled-components";

const H1 = styled.h1<{ $bgColor: string, $fColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fColor};
  width: auto;
  max-width: 90%;
  padding: 10px 20px;
  font-family: "Dosis", serif;
  text-align: center;
  font-size: 5.5rem;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Banner1 = styled.div<{ $bgColor: string; $fColor: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${(props) => props.$bgColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 5px;
  }
`;

interface Info {
  image?: string;
  h1?: string;
  color: string;
  fcolor: string;
}

const Banner = ({ h1, color, fcolor }: Info) => {
  return (
    <Banner1 $bgColor={color} $fColor={fcolor}>
      <H1 $bgColor={color} $fColor={fcolor}>{h1}</H1>
    </Banner1>
  );
};

export default Banner;
