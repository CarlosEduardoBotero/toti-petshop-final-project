import React from "react";
import "./Accesorios.css";
import bebedero from "./bebedouro.jpg";

const Accesorios = () => {
  return (
    <div className="Accesorios-text">
      <h1 className="Accesorios-geral">
        Accesorios em Geral, tudo que procura para o seu pet!
      </h1>
      <div className="complemento-portada">
        <h2>Tudo o que o seu pet precisa esta aqui!</h2>
      </div>
      <div>
        <ul>
          <div className="variedade">
            <h2>ACCESORIOS</h2>
          </div>
        </ul>
        <h3>
          <li>Cama</li>
        </h3>
        <h3>
          <li>Tijela</li>
        </h3>
        <h3>
          <li>Coleira</li>
        </h3>
        <h3>
          <li>Brinquedos</li>
        </h3>
        <h3>
          <li>Cortador de unhas</li>
        </h3>
        <h3>
          <li>Shampoo</li>
        </h3>
        <h3>
          <li>Roupas</li>
        </h3>
        <div className="muito-mais">
          <h5>
            <li>E muito mais</li>
          </h5>
        </div>
        <div className="Accesotios-card">
          <img className="Accessorio-foto" src={bebedero}></img>
          <h1>Oferta</h1>
          <h3>25% Off</h3>
          <h5>
            <s>R$ 24,99</s>
          </h5>
          <strong>R$ 19,99</strong>
          <div className="Accesorios-boton">
            <button className="Accesorios-bnt">comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
