import { useState, useEffect } from "react";
import Modal from "../../components/servico/Modal/Modal";
import "./SeusPedidosCard.css";
import { TbTruckDelivery } from "react-icons/tb";
import { toast } from "react-toastify";

const SeusPedidosCard = ({
  imagem,
  desconto,
  preço,
  quantidade,
  descrição,
  descontoPorcentagem,
  codigo,
  id,
}) => {
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [openModifyProductModal, setOpenModifyProductModal] = useState(false);
  const [quantity, setQuantity] = useState(quantidade);
  const [value, setValue] = useState(quantidade);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const formatBrasilCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const putProduct = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        fetch(`http://localhost:3001/cart/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagem: imagem,
            descrição: descrição,
            descontoPorcentagem: descontoPorcentagem,
            desconto: desconto,
            preco: preço,
            codigo: codigo,
            quantidade: value,
          }),
        }),
        {
          pending: "Alterando",
          success: "alteração feita com sucesso",
          error: "Ocurreu um erro",
        }
      );
      setQuantity(value);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModifyProductModal(false);
    }
  };

  return (
    <>
      <div className="seus-pedidos-card">
        <img src={imagem} className="seus-pedidos-photo pokemon-photo" />
        <div className="seus-pedidos-card-content">
          <div className="seus-pedidos-a-caminho">
            a caminho da entrega
            <TbTruckDelivery />
          </div>
          <p className="seus-pedidos-text-description">
            Quantidade: {quantity}
          </p>
          <p className="seus-pedidos-text-description">Desconto: {desconto}</p>
          <p className="seus-pedidos-text-description">
            Total: {formatBrasilCurrency(+preço * +quantity)}
          </p>
          <div className="seus-pedidos-card-buttons-container">
            <button
              className="seus-pedidos-card-button seus-pedidos-red"
              onClick={() => setOpenCancelationModal(true)}
            >
              cancelar
            </button>
            <button
              className="seus-pedidos-card-button"
              onClick={() => setOpenModifyProductModal(true)}
            >
              alterar
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openCancelationModal}
        onClose={() => setOpenCancelationModal(false)}
      >
        <div className="seus-pedidos-modal-cancelation-container">
          <h1>Tem certeza de que deseja cancelar o pedido?</h1>
          <button
            onClick={() => {
              setOpenCancelationModal(false);
            }}
            className="pet-confirmation-modal-button"
          >
            confirmar
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={openModifyProductModal}
        onClose={() => setOpenModifyProductModal(false)}
      >
        <div className="seus-pedidos-modal-modify-container">
          <h1>Alterar quantidade</h1>
          <div className="seus-pedidos-card seus-pedidos-card-modal">
            <img src={imagem} className="seus-pedidos-photo " />
            <div className="seus-pedidos-card-content">
              <input
                type="number"
                value={value}
                onChange={handleChange}
                className="seus-pedidos-text-description"
              ></input>
              <p className="seus-pedidos-text-description">
                Total: {formatBrasilCurrency(+preço * +value)}
              </p>
            </div>
          </div>
          <button
            className="seus-pedidos-card-button"
            disabled={+value === +quantity}
            onClick={putProduct}
          >
            confirmar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SeusPedidosCard;
