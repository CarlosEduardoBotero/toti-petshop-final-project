import "./AdoptaMe.css";
import caes from "../adoptaMe/img/dog.jpg";
import gatos from "../adoptaMe/img/cat.jpg";
import AdoptaMeCard from "./AdoptaMeCard";
import { CardDatosCats } from "./datosCats";
import { CardDatosDogs } from "./datosDogs";
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

      <div className="AdoptaMegatdog">
        <img className="AdoptaMedog" src={caes} width="110"></img>
        <img className="AdoptaMecat" src={gatos} width="110"></img>
      </div>

      <div className="AdoptaMefiltrot">
        <a
          className="AdoptaMefiltro"
          rel="filtro"
          href="#"
          id="AdoptaMefiltroH"
        >
          FÊMEAS
        </a>

        <a
          className="AdoptaMefiltro"
          rel="filtro"
          href="#"
          id="AdoptaMefiltroM"
        >
          MACHOS
        </a>

        <a
          className="AdoptaMefiltro"
          rel="filtro"
          href="#"
          id="AdoptaMefiltroT"
        >
          TUDOS
        </a>
      </div>
      <div className="AdoptaMeinputt">
        <input
          type="text"
          name="O que você está procurando?"
          placeholder="O que você está procurando?"
          className="AdoptaMeinput"
        ></input>
      </div>

      <div className="AdoptaMecardT">
        {photoList &&
          photoList.map((photo, i) => (
            <AdoptaMeCard
              imagen={photo}
              titulo={CardDatosDogs[i].titulo}
              genero={CardDatosDogs[i].genero}
            />
          ))}
        {photoListCats &&
          photoListCats.map((photo, i) => (
            <AdoptaMeCard
              imagen={photo.url}
              titulo={CardDatosCats[i].titulo}
              genero={CardDatosCats[i].genero}
            />
          ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default AdoptaMe;
