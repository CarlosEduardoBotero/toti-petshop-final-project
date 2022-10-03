import { useState, useEffect } from "react";
import SeusPedidosCard from "./SeusPedidosCard";
import "./SeusPedidos.css";

const SeusPedidos = () => {
  const [cartData, setCartData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setCartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="seus-pedidos-container">
      <h1>SeusPedidos</h1>

      <div className="seus-pedidos-card-container">
        {cartData &&
          cartData.map((product) => (
            <SeusPedidosCard
              key={product.id}
              id={product.id}
              imagem={product.imagem}
              descrição={product.descrição}
              descontoPorcentagem={product.descontoPorcentagem}
              desconto={product.desconto}
              preço={product.preco}
              codigo={product.codigo}
              buttonText="cancelar"
              quantidade={product.quantidade}
            />
          ))}
      </div>
    </div>
  );
};

export default SeusPedidos;
