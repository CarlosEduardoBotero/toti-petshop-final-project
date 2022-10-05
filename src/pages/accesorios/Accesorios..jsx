import { useEffect, useState } from "react";
import "./Accesorios.css";
import carinhos from "./carinhos.jpg";
import AccesoriosCard from "./AccesoriosCard";

const Accesorios = () => {
  const [products, setProducts] = useState();
  const getProduts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postProducts = async (product) => {
    try {
      await fetch(`http://localhost:3001/cart`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imagem: product.imagem,
          descrição: product.descricao,
          descontoPorcentagem: product.descontoPorcentagem,
          desconto: product.desconto,
          preço: product.preco,
          codigo: product.codigo,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduts();
  }, []);
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
        <div className="Accesorios-containercard">
          {products &&
            products.map((product) => (
              <AccesoriosCard
                key={product.id}
                imagem={product.imagem}
                descrição={product.descricao}
                descontoPorcentagem={product.descontoPorcentagem}
                desconto={product.desconto}
                preço={product.preco}
                codigo={product.codigo}
                buttonText="comprar"
                quantidade={product.quantidade}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
