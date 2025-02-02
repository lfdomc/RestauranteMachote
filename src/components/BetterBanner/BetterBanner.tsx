import styled from "styled-components";
import { Link } from "react-router-dom";

const MainSection = styled.section<{ $bgmain: string, $flexdirection: string, $bgimage: string }>`
    display: flex;
    flex-direction: ${(props) => props.$flexdirection};
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgmain};
    align-items: center;
    justify-content: center;
    background-image: ${(props) => (props.$bgimage ? `url(${props.$bgimage})` : "none")};
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

const SectionA = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-top: 10px;

    img {
        max-width: 80%;
        height: auto;
        border-radius: 190px;
        padding-bottom: 10px;
    }

    @media (max-width: 768px) {
        width: 100%;
        img {
            max-width: 90%;
        }
    }

    &:hover {
        transform: scale(1.02);
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
    }
`;

const SectionB = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: "Dosis", sans-serif;
    text-align: start;
    padding: 20px 100px 20px 50px;

    h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 900;
        max-width: 80%;
    }

    h2 {
        font-size: clamp(1rem, 3vw, 1.5rem);
        font-weight: 700;
        max-width: 90%;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
`;

const SectionC = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    background-color: #f3edf368;
    width: 70%;
    border-radius: 20px;
    padding: 20px;
    margin-top: 15px;
    text-align: center; /* Justifica el texto */

    h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 900;
    }

    h3 {
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 700;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 5px;
        width: 100%;
        padding: 5px;
    }
`;

const SectionD = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button<{ $btColor: string, $fbtColor: string, $hbtColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 250px;
    background-color: ${(props) => props.$btColor};
    color: ${(props) => props.$fbtColor};
    font-size: clamp(2rem, 2.5vw, 1.5rem);
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
        background-color: ${(props) => props.$hbtColor};
    }

    img {
        width: 50px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button2 = styled(Button)<{ $bt2display: string }>`
    display: ${(props) => props.$bt2display};
`;

interface BannerProps {
    image: string;
    title: string;
    text: string;
    text2: string;
    text3: string;
    textbutton: string;
    btColor: string;
    hbtColor: string;
    fbtColor: string;
    bgmain: string;
    flexdirection: string;
    btimage?: string;
    bgimage?: string;
    btonClick?: () => void;
    imonClick?: () => void;
    bt2display: string;
    btimage2?: string;
    bt2Color: string;
    fb2tColor: string;
    textbutton2: string;
    hbt2Color: string;
    bt2onClick?: () => void;
}

const BetterBanner: React.FC<BannerProps> = ({
    image,
    title,
    text,
    text2,
    text3,
    textbutton,
    btColor,
    fbtColor,
    bgmain,
    hbtColor,
    flexdirection,
    btimage = "",
    bgimage = "",
    btonClick,
    imonClick,
    btimage2 = "",
    bt2display,
    bt2Color,
    fb2tColor,
    textbutton2,
    hbt2Color,
    bt2onClick,
}) => {
    return (
        <MainSection $bgmain={bgmain} $flexdirection={flexdirection} $bgimage={bgimage}>
            <SectionA>
                <img src={image} alt="Imagen" onClick={imonClick} />
            </SectionA>
            <SectionB>
                <h1>{title}</h1>
                <h2>{text}</h2>
                <Link to="/servicios">
                <SectionC>
                    <h1>{text2}</h1>
                    <h3>{text3}</h3>
                </SectionC>
                </Link>
                <SectionD>
                    <Button $btColor={btColor} $hbtColor={hbtColor} $fbtColor={fbtColor} onClick={btonClick}>
                        {btimage && <img src={btimage} alt="boton" />}
                        {textbutton}
                    </Button>
                    
                        <Button2 
                            $btColor={bt2Color} 
                            $hbtColor={hbt2Color} 
                            $fbtColor={fb2tColor} 
                            onClick={bt2onClick} 
                            $bt2display={bt2display}>
                            {btimage2 && <img src={btimage2} alt="boton" />}
                            {textbutton2}
                        </Button2>
                    
                </SectionD>
            </SectionB>
        </MainSection>
    );
};

export default BetterBanner;
