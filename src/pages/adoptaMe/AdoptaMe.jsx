import "./AdoptaMe.css";
import AdoptaMeCard from "./AdoptaMeCard";
import { CardDatosCats } from "./datosCats";
import { CardDatosDogs } from "./datosDogs";
import facebook from "./img/facebook.png";
import instagram from "./img/Instagram.png";
import wsp from "./img/wpp.png";
import { useEffect, useState } from "react";

const AdoptaMe = () => {
  const [photoList, setPhotoList] = useState();
  const [photoListCats, setPhotoListCats] = useState();
  //dogs
  async function getPets() {
    try {
      const response = await fetch(
        "https://dog.ceo/api/breed/hound/images/random/8s"
      );
      const data = await response.json();
      console.log(data);
      setPhotoList(data.message);
    } catch (error) {}
  }
  //cats

  async function getCats() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=8"
      );
      const data = await response.json();
      console.log(data);
      setPhotoListCats(data);
    } catch (error) {}
  }

  async function postsPet(imagen, titulo, genero) {
    try {
      await fetch("http://localhost:3001/adotar", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imagen: imagen,
          titulo: titulo,
          genero: genero,
        }),
      });
    } catch (error) {}
  }

  useEffect(() => {
    getCats();
    getPets();
  }, []);

  return (
    <div>
      <div className="AdoptaMeheader">
        <h1 className="AdoptaMetextprincipal">
          Amor verdadeiro de um novo amigo, adote!
        </h1>
      </div>
      <h3 className="AdoptaMetextsecundario">
        Venha conhecer os cães e gatos para adoção
      </h3>
      <p className="AdoptaMetextterciario">
        Nossos protetores aliados fizeram um grande esforço para resgatar esses
        animais de estimação. Caso decida adoptar um gato, cão ou cachorro, irá
        levá-lo para casa vacinado, desparasitado e esterilizado.
      </p>

      <div className="AdoptaMecardT">
        {photoList &&
          photoList.map((photo, i) => (
            <AdoptaMeCard
              imagen={photo}
              titulo={CardDatosDogs[i].titulo}
              genero={CardDatosDogs[i].genero}
              buttonText="Adota-me"
              onClick={() =>
                postsPet(
                  photo,
                  CardDatosDogs[i].titulo,
                  CardDatosDogs[i].genero
                )
              }
            />
          ))}
        {photoListCats &&
          photoListCats.map((photo, i) => (
            <AdoptaMeCard
              imagen={photo.url}
              titulo={CardDatosCats[i].titulo}
              genero={CardDatosCats[i].genero}
              buttonText="Adota-me"
              onClick={() =>
                postsPet(
                  photo.url,
                  CardDatosCats[i].titulo,
                  CardDatosCats[i].genero
                )
              }
            />
          ))}
      </div>
      <div  className="AdoptaMerodape">
        <div className="AdoptaMebtntext">
        <h4>Compartir:</h4>
        <a href="https://www.facebook.com/"><img className="AdoptaMebtnfiw"  src={facebook}></img></a>
        <a href="https://www.instagram.com/"><img className="AdoptaMebtnfiw"  src={instagram}></img></a>
        <a href="https://web.whatsapp.com/"><img className="AdoptaMebtnfiw"  src={wsp}></img></a>
        </div>
        <p>
          © 2022 TheRoyalPet. Todos os direitos reservados. Aviso legal,
          política de privacidade e proteção de dados pessoais.
        </p>
      </div>
    </div>
  );
};

export default AdoptaMe;
