import React from "react";
import "./Accesorios.css";
import carinhos from "./carinhos.jpg";
import bebedero from "./bebedouro.jpg";
import bola from "./bola roxa.webp";
import cadena from "./cadenas.jpg";
import bolas from "./bolacores.jpg";
import caixa from "./caixa.jpg";
import Cama from "./cama.jpg";
import coleiraazul from "./percherablue.webp";
import coleiraviolet from "./percheraviolet.webp";

const Accesorios = () => {
  return (
    <div className="Accesorios-text">
      <h1 className="Accesorios-geral">
        Accesorios em Geral, tudo que procura para seu pet!
      </h1>
      <div className="complemento-portada">
        <h2>Tudo o que seu pet precisa esta aqui!</h2>
      </div>
      <div className="carinhospicture">
        <img className="carinhos" src={carinhos}></img>
      </div>
      <div>
        <div className="Accesorios-Conheça">
          <h1>Conheça muito mais sobre nossos produtos.</h1>
        </div>
        <ul>
          <div className="variedade">
            <h2>ACCESORIOS</h2>
          </div>
        </ul>
        <div className="muitomais">
          <h3>
            <li>
              {" "}
              <a>Cama</a>
            </li>
          </h3>
          <h3>
            <li>
              <a>Tijela</a>
            </li>
          </h3>
          <h3>
            <li>
              {" "}
              <a>Coleira</a>
            </li>
          </h3>
          <h3>
            <li>
              <a>Brinquedos</a>
            </li>
          </h3>
          <h3>
            <li>
              <a>Higiene</a>
            </li>
          </h3>
          <h3>
            <li>
              <a>Roupas</a>
            </li>
          </h3>
        </div>
        <div className="muito-mais">
          <h2>
            <li>E muito mais</li>
          </h2>
        </div>

        <div className="Accesorios-containercard">
          <div className="Accesotios-card">
            <img className="Accessorio-foto" src={bebedero}></img>
            <div className="kit">
              <p>Kit para seu pet comer e beber agua</p>
            </div>
            <h2 className="oferta">Oferta</h2>
            <h4 className="off">25% Off</h4>
            <h5 className="desconto">
              <s>R$ 24,99</s>
            </h5>
            <h2 className="preço">R$ 19,99</h2>
            <h6 className="codigo">COD 554564</h6>
            <div className="Accesorios-boton">
              <button className="Accesorios-bnt">comprar</button>
            </div>
          </div>

          <div className="Accesorios-cardbola">
            <img className="Accesorios-fotobola" src={bola}></img>
            <div className="bolinha">
              <p>Bola de brinquedo com pontas flexiveis</p>
            </div>
            <h2 className="oferta2">Oferta</h2>
            <h4 className="off2">30% Off</h4>
            <h5 className="desconto2">
              <s>R$ 27,99</s>
            </h5>
            <h2 className="preço2">R$ 21,99</h2>
            <h6 className="codigo2">COD 896321</h6>
            <div className="Accesorios-botton">
              <button className="Accesorios-bnt2">comprar</button>
            </div>
          </div>
          <div className="Accesorios-cadena">
            <img className="Accesorios-fotocadena" src={cadena}></img>
            <div className="corrente">
              <p>Correntinha de luxo com pendente para nome</p>
            </div>
            <h2 className="oferta3">Oferta</h2>
            <h4 className="off3">20% Off</h4>
            <h5 className="desconto3">
              <s>R$ 59,90</s>
            </h5>
            <h2 className="preço3">R$ 47,90</h2>
            <h6 className="codigo3">COD 183674</h6>
            <div className="Accesorios-button">
              <button className="Accesorios-bnt3">comprar</button>
            </div>
          </div>
          <div className="Accesorios-bolacor">
            <img className="Accesorios-fotobolacor" src={bolas}></img>
            <div className="bolas">
              <p>Bola que ajuda na Higiene dos dentes do seu pet</p>
            </div>
            <h2 className="oferta4">Oferta</h2>
            <h4 className="off4">15% Off</h4>
            <h5 className="desconto4">
              <s>R$ 25,99</s>
            </h5>
            <h2 className="preço4">R$ 21,99</h2>
            <h6 className="codigo4">COD 156615</h6>
            <div className="Accesorios-buttonn">
              <button className="Accesorios-bnt4">comprar</button>
            </div>
          </div>
          <div className="Accesorios-caixa">
            <img className="Accesorios-fotocaixa" src={caixa}></img>
            <div className="caixa">
              <p>Caixa de viagem para transportar seu pet </p>
            </div>
            <h2 className="oferta5">Oferta</h2>
            <h4 className="off5">10% Off</h4>
            <h5 className="desconto5">
              <s>R$ 44,99</s>
            </h5>
            <h2 className="preço5">R$ 39,99</h2>
            <h6 className="codigo5">COD 574961</h6>
            <div className="Accesorios-botum">
              <button className="Accesorios-bnt5">comprar</button>
            </div>
          </div>
          <div className="Accesorios-cama">
            <img className="Accesorios-fotocama" src={Cama}></img>
            <div className="cama">
              <p>Cama para o seu pet ter más comodidade</p>
            </div>
            <h2 className="oferta6">Oferta</h2>
            <h4 className="off6">15% Off</h4>
            <h5 className="desconto6">
              <s>R$ 51,99</s>
            </h5>
            <h2 className="preço6">R$ 47,99</h2>
            <h6 className="codigo6">COD 013697</h6>
            <div className="Accesorios-bottum">
              <button className="Accesorios-bnt6">comprar</button>
            </div>
          </div>
          <div className="Accesorios-coleirablue">
            <img className="Accesorios-fotocoleirablue" src={coleiraazul}></img>
            <div className="coleira">
              <p>Coleira cor azul para passiar seu pet </p>
            </div>
            <h2 className="oferta7">Oferta</h2>
            <h4 className="off7">20% Off</h4>
            <h5 className="desconto7">
              <s>R$ 34,99</s>
            </h5>
            <h2 className="preço7">R$ 28,99</h2>
            <h6 className="codigo7">COD 497834</h6>
            <div className="Accesorios-buttum">
              <button className="Accesorios-bnt7">comprar</button>
            </div>
          </div>
          <div className="Accesorios-coleiraviolet">
            <img
              className="Accesorios-fotocoleiraviolet"
              src={coleiraviolet}
            ></img>
            <div className="coleira">
              <p>Coleira cor roxa para passiar seu pet </p>
            </div>
            <h2 className="oferta8">Oferta</h2>
            <h4 className="off8">20% Off</h4>
            <h5 className="desconto8">
              <s>R$ 38,99</s>
            </h5>
            <h2 className="preço8">R$ 32,99</h2>
            <h6 className="codig8">COD 487834</h6>
            <div className="Accesorios-buttumm">
              <button className="Accesorios-bnt8">comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
