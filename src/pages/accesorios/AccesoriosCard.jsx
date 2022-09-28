import "./Accesorios.css";
import { useState } from "react";
const AccesoriosCard = (props) => {
  const [value, setValue] = useState(props.quantidade);
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <div className="Accesotios-card">
      <img className="Accessorio-foto" src={props.imagem}></img>
      <div className="kit">
        <p>{props.descrição}</p>
      </div>
      <h2 className="oferta">Oferta</h2>
      <h4 className="off">{props.descontoPorcentagem}% off</h4>
      <h5 className="desconto">
        <s>R${props.desconto}</s>
      </h5>
      <h2 className="preço">R${props.preço}</h2>
      <h6 className="codigo">{props.codigo}</h6>
<<<<<<< HEAD
      <input
        className="Accesorios-contador"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <div className="Quantidade">
        <h6>Quantidade</h6>
      </div>
=======
      {props.quantidade && (
        <input
          className="Accesorios-contador"
          type="number"
          value={value}
          onChange={handleChange}
        />
      )}
>>>>>>> 23cefb5f32105fe71f78f2497e082949016d61f5
      <div className="Accesorios-boton">
        <button className="Accesorios-bnt" onClick={props.onClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};
export default AccesoriosCard;
