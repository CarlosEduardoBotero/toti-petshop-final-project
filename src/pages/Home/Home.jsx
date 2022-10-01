import "./Home.css";
import AccesoriosCard from "../accesorios/AccesoriosCard";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [maisVendidos, setMaisVendidos] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/maisVendidos");
      const data = await response.json();
      setMaisVendidos(data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <div className="home-bemv">
        <div className="home-bemv-card">
          <img
            className="home-imguno"
            src="https://blog.petiko.com.br/wp-content/uploads/2020/10/capa-4.jpg"
            alt="cachorroegatoamigo"
          />
          <div className="home-textouno">
            <h1>BEM VINDO!</h1>
            <h2>Ao mundo dos Pets,</h2>
            <h1> bem-vindo a TheRoyalPeT</h1>
          </div>
        </div>
      </div>
      <div className="home-banho">
        <img
          className="home-imgdos"
          src="https://www.ative.pet/wp-content/uploads/2020/12/original-cea330e3c460ef992af4841daeedd1f4-scaled-2560x1280.jpeg"
          alt="gatomolhado"
        />
        <div className="home-textodos">
          <h1>Espuma</h1>
          <h2> & </h2>
          <h1>Doces de Cuidado</h1>
        </div>
        <div className="home-textotres">
          <h2>
            Todo para higiene <br></br>do seu pet
          </h2>
          <h1>Banho & Tosa </h1>
        </div>
      </div>
      <div className="homecontainercard">
        {maisVendidos &&
          maisVendidos.map((product) => (
            <AccesoriosCard
              imagem={product.imagem}
              descrição={product.descricao}
              descontoPorcentagem={product.descontoPorcentagem}
              desconto={product.desconto}
              preço={product.preco}
              codigo={product.codigo}
              buttonText="comprar"
              onClick={() => {
                navigate("/acessorios");
              }}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
