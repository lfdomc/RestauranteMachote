import Banner from "../components/Banner/Banner"
import BetterBanner from "../components/BetterBanner/BetterBanner"

const Servicios = () => {
  return (
    <div>

      <Banner image="/image/servicios.png" h1="Nuestras Sucursales" color="trasparent" fcolor="#f3f3f3" />
      <BetterBanner
        //MainProps
        flexdirection="row-reverse"
        imgflexdirection="display"
        bgmain=" #c57f4d9f"
        bgimage=""
        //Imagen Props
        image="/image/ktrina/sanrafael.png"
        //imonClick={() => window.location.href = ""}

        //Titulo Props
        title="San Rafael de Alajuela"
        text="Dirección: Cta. Los Herrera, Provincia de Alajuela, San Rafael"

        //Texto Props
        text2=""
        text3="Teléfono: +506 7045-3129"
        //Button1 Props
        textbutton="WhatsApp"
        btColor="#2e0143"
        fbtColor="white"
        hbtColor="#0e061e"
        btonClick={() => window.location.href = "https://wa.me/50670453129"}
        btimage="/image/whatsapp.png"
        //Button2 Props
        btimage2="/image/Redes/maps.png"
        bt2display="flex"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Dirección"
        hbt2Color="#0e061e"
        bt2onClick={() => window.location.href = "https://www.google.com/maps/dir/10.0085416,-84.2386861/la+catrina+restaurante+san+rafael+de+alajuela/@9.9934455,-84.2566567,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8fa0f9357f140417:0x1dcc79405f6e8b8f!2m2!1d-84.2125579!2d9.9738305?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"}
      />
<BetterBanner
        //MainProps
        flexdirection="row"
        imgflexdirection="display"
        bgmain=" #43be76cb"
        bgimage=""
        //Imagen Props
        image="/image/ktrina/belen.jpg"
        //imonClick={() => window.location.href = ""}

        //Titulo Props
        title="San Antonio de Belén"
        text="Dirección: Frente al Lagar, Heredia Province, Belén"

        //Texto Props
        text2=""
        text3="Teléfono: +506 7180-2334"
        //Button1 Props
        textbutton="WhatsApp"
        btColor="#2e0143"
        fbtColor="white"
        hbtColor="#0e061e"
        btonClick={() => window.location.href = "https://wa.me/50671802334"}
        btimage="/image/whatsapp.png"
        //Button2 Props
        btimage2="/image/Redes/maps.png"
        bt2display="flex"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Dirección"
        hbt2Color="#0e061e"
        bt2onClick={() => window.location.href = "https://www.google.com/maps/dir/10.0085416,-84.2386861/la+catrina+restaurante+belen/@9.9964074,-84.2425081,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8fa0fb1e4cf1fba7:0x336fb3b6d44547de!2m2!1d-84.182532!2d9.980039?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"}
      />
        <BetterBanner
        //MainProps
        flexdirection="row-reverse"
        imgflexdirection="display"
        bgmain=" #4090c6b8"
        bgimage=""
        //Imagen Props
        image="/image/ktrina/alajuela.jpg"
        //imonClick={() => window.location.href = ""}

        //Titulo Props
        title="La Trinidad de Alajuela"
        text="Dirección:  Frente a Grupo Diasa, 800 metros oeste del cementerio central de Alajuela, La Trinidad"

        //Texto Props
        text2=""
        text3="Teléfono: +506 6401-7329"
        //Button1 Props
        textbutton="WhatsApp"
        btColor="#2e0143"
        fbtColor="white"
        hbtColor="#0e061e"
        btonClick={() => window.location.href = "https://wa.me/50664017329"}
        btimage="/image/whatsapp.png"
        //Button2 Props
        btimage2="/image/Redes/maps.png"
        bt2display="flex"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Dirección"
        hbt2Color="#0e061e"
        bt2onClick={() => window.location.href = "https://www.google.com/maps/dir/10.0085416,-84.2386861/Delicias+la+ktrina,+Grupo+Diasa,+Alajuela,+Trinidad/@10.0113193,-84.2446686,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8fa0f9001f556f0d:0x99bfde1475bb8ae9!2m2!1d-84.2287025!2d10.0141395?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"}
      />
      
    </div>
  )
}

export default Servicios