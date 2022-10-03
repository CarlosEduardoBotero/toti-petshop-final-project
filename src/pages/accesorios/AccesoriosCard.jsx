import "./Accesorios.css";
import "./AccesoriosCard.css";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { toast } from "react-toastify";

const AccesoriosCard = (props) => {
  const [value, setValue] = useState(props.quantidade);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const formatBrasilCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const postProducts = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        fetch(`http://localhost:3001/cart`, {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagem: props.imagem,
            descrição: props.descrição,
            descontoPorcentagem: props.descontoPorcentagem,
            desconto: props.desconto,
            preco: props.preço,
            codigo: props.codigo,
            quantidade: value,
          }),
        }),
        {
          pending: "Promise is pending",
          success: "Compra bem sucedida",
          error: "Ocurreu um erro",
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
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
        <h2 className="preço">{formatBrasilCurrency(props.preço)}</h2>
        <h6 className="codigo">{props.codigo}</h6>
        {props.quantidade && (
          <input
            className="Accesorios-contador"
            type="number"
            value={value}
            onChange={handleChange}
          />
        )}
        <div className="Accesorios-boton">
          <button
            className="Accesorios-bnt"
            onClick={props.onClick ?? handleOpenModal}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="accesorios-card-modal-container">
          <h1>Confirme sua compra</h1>

          <div className="accesorios-card-modal-confirmation-card">
            <img src={props.imagem} />
            <div className="accesorios-card-modal-confirmation-card-description">
              <h3>{props.descrição}</h3>
              <div className="accesorios-card-modal-confirmation-card-price">
                <p>Quantidade: {value}</p>
                <p>Total: {formatBrasilCurrency(+value * +props.preço)}</p>
              </div>
            </div>
          </div>
          <form onSubmit={postProducts} className="accesorios-card-modal-form">
            <div className="accesorios-card-modal-form-inputs-container">
              <div>
                <label>Tarjeta de credito</label>
                <input type="numeric" required />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="text"
                  pattern="^[0-9]{3}"
                  title="Enter numbers only."
                  required
                />
              </div>
            </div>
            <button
              className="accesorios-card-modal-confirmation-card-button"
              type="submit"
            >
              Confirmar Compra
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AccesoriosCard;
