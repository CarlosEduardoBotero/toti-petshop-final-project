import { useState, useEffect } from "react";
import SeusPedidosCard from "./SeusPedidosCard";
import "./SeusPedidos.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SeusPedidos = () => {
  const [cartData, setCartData] = useState([]);
  const [creditCard, setCreditCard] = useState("");
  const [CVCvalue, setCVC] = useState("");
  const [valid, setValid] = useState("");

  const navigate = useNavigate();

  const validateForm =
    creditCard.length === 19 && CVCvalue.length === 3 && valid.length === 5;

  const formatBrasilCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setCartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productID) => {
    try {
      await toast.promise(
        fetch(`http://localhost:3001/cart/${productID}`, {
          method: "DELETE",
        }),
        {
          pending: "Removendo",
          success: "Remoção feita com sucesso",
          error: "Ocurreu um erro",
        }
      );
      setCartData((prev) => prev.filter((item) => item.id !== productID));
    } catch (error) {}
  };

  const deleteAllCart = async (id) => {
    try {
      fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
      });
    } catch (error) {}
  };

  const postPayment = async ({ valid, creditCard, CVCvalue }) => {
    try {
      await toast.promise(
        fetch(`http://localhost:3001/payment`, {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            creditCard,
            valid,
            CVCvalue,
          }),
        }),
        {
          pending: "Comprando",
          success: "compra bem sucedida",
          error: "Ocurreu um erro",
        }
      );
      navigate("/adote-me");
      const ids = cartData.map((item) => item.id);
      ids.forEach((id) => deleteAllCart(id));
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCreditCard = (e) => {
    const { value } = e.target;

    if (/\d{16}/.test(value.split("-").join(""))) {
      setCreditCard(value.split("-").join("").match(/\d{4}/g).join("-"));
      return;
    }
    setCreditCard(value);
  };

  const onChangeCVC = (e) => {
    const { value } = e.target;

    console.log(value);
    if (/\d{4}/.test(value)) return;

    setCVC(value);
  };

  const onChangeValid = (e) => {
    const { value } = e.target;

    if (/\d{4}/.test(value.split("/").join(""))) {
      setValid(value.split("/").join("").match(/\d{2}/g).join("/"));
      return;
    }
    setValid(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postPayment({ valid, CVCvalue, creditCard });
    setCVC("");
    setCreditCard("");
    setValid("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="seus-pedidos-container">
      <h1>Carrinho de Compras</h1>
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
              onDeleteProduct={() => deleteProduct(product.id)}
              setCartData={setCartData}
            />
          ))}
      </div>

      <div className="seus-pedidos-payment">
        <ul className="seus-pedidos-payment-ul">
          {cartData &&
            cartData.map((product) => (
              <li key={product.id}>
                x{product.quantidade}
                {"  "}
                {formatBrasilCurrency(+product.quantidade * +product.preco)}
                {"  "}
                {product.descrição}
              </li>
            ))}
        </ul>
        <h1>
          Total:{" "}
          {cartData &&
            formatBrasilCurrency(
              cartData.reduce(
                (acc, item) => acc + +item.preco * +item.quantidade,
                0
              )
            )}
        </h1>
        <form className="seus-pedidos-form" onSubmit={onSubmit}>
          <label htmlFor="Cartão de credito">Cartão de credito</label>
          <input
            placeholder="0000-0000-0000-0000"
            onChange={onChangeCreditCard}
            value={creditCard}
          />
          <label htmlFor="Cartão de credito">Validade</label>
          <input placeholder="01/30" onChange={onChangeValid} value={valid} />
          <label htmlFor="Cartão de credito">CVC</label>
          <input placeholder="000" onChange={onChangeCVC} value={CVCvalue} />
          <button className="seus-pedidos-card-button" disabled={!validateForm}>
            pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeusPedidos;
