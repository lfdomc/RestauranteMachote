import styled from "styled-components"
import Banner from "../components/Banner/Banner"
import Scroll1 from "../components/Scroll1/Scroll1";
import BetterBanner from "../components/BetterBanner/BetterBanner";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    display: none;  // Oculta la sección en pantallas menores a 450px
  }
`;


const Home = () => {


  return (
    <div>

      <Banner h1="Delicias La Ktrina" color="trasparent" fcolor="white" />

      <BetterBanner
        //MainProps
        flexdirection="row"
        bgmain=" #f0e8f390"
        bgimage=""
        //Imagen Props
        image="/image/ktrina/ktrina1.png"
        //imonClick={() => window.location.href = "https://wa.me/50670453129"}
        //Titulo Props
        title="¡La verdadera comida mexicana!"
        text="Tenemos deliciosas comidas a precios super accesibles. Contamos con servicio express o bien pueden pasar a retirar."
        //Texto Props
        text2="3"
        text3="Sucursales para su conveniencia"
        //Button1 Props
        textbutton="Conozca Nuestro Menú"
        btColor="#2e0143"
        fbtColor="white"
        hbtColor="#e32f02"
        btonClick={() => window.location.href = "https://wa.me/50670453129"}
        //btimage="/image/ktrina/calabera.png"

        //Button2 Props
        //btimage2="/image/ktrina/calabera.png"
        bt2display="none"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Conozca Nuestro Menú"
        hbt2Color="#ece2df"

      />
      
      <Scroll1 />

      <Section>
      </Section>
    </div>
  )
}

export default Home
