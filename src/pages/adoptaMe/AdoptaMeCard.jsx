import "./AdoptaMe.css";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptaMeCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephoneNumber: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  async function postsPet(e) {
    e.preventDefault();
    try {
      await toast.promise(
        fetch("http://localhost:3001/adotar", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagen: props.imagen,
            titulo: props.titulo,
            genero: props.genero,
            ...form,
          }),
        }),
        {
          pending: "Promise is pending",
          success: "Adoção bem sucedida",
          error: "Ocurreu um erro",
        }
      );
    } catch (error) {
    } finally {
      handleCloseModal();
    }
  }

  return (
    <>
      <div className="AdoptaMecard">
        <img src={props.imagen} alt="pet" width={200} height={180}></img>
        <div className="AdoptaMecontainer">
          <h1>{props.titulo}</h1>
        </div>
        <div className="AdoptaMedescp">
          <p>{props.genero}</p>
        </div>
        <div className="AdoptaMebuttoncontainer">
          <button
            className="AdoptaMebutton"
            onClick={props.onClick ?? handleOpenModal}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="adota-me-modal-container">
          <h1>você vai adotar: {props.titulo}</h1>
          <img src={props.imagen} alt="imagen" />
          <form className="adota-me-modal-form" onSubmit={postsPet}>
            <label>Nome:</label>
            <input
              className="adota-me-modal-form-input"
              type="text"
              name="name"
              placeholder="Escreva seu nome"
              onChange={handleChange}
              required
            ></input>

            <label>E-mail:</label>
            <input
              className="adota-me-modal-form-input"
              type="email"
              name="email"
              placeholder="Escreva seu Email"
              onChange={handleChange}
              required
            ></input>

            <label>telefone:</label>
            <input
              type="tel"
              name="telephoneNumber"
              className="adota-me-modal-form-input"
              placeholder="Deixa aquí seu telefone..."
              onChange={handleChange}
              required
              pattern="^[0-9]+"
            />

            <button>confirmar</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AdoptaMeCard;
