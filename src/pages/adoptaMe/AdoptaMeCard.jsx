import "./AdoptaMe.css";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const validation = yup.object().shape({
  name: yup.string().required("nome é um campo obrigatório"),
  email: yup.string().required("email é um campo obrigatório"),
  telephoneNumber: yup.string().required("telefone é um campo obrigatório"),
});

const AdoptaMeCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation),
  });

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  async function postsPet(form) {
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
          success: "Solicitação enviada com sucesso",
          error: "Ocurreu um erro",
        }
      );
      reset({ name: "", email: "", telephoneNumber: "" });
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
          <form
            className="adota-me-modal-form"
            onSubmit={handleSubmit(postsPet)}
          >
            <label>Nome:</label>
            <input
              className="adota-me-modal-form-input"
              type="text"
              name="name"
              {...register("name")}
              placeholder="Escreva seu nome"
            ></input>
            <p>{errors.name?.message}</p>

            <label>E-mail:</label>
            <input
              className="adota-me-modal-form-input"
              type="email"
              name="email"
              {...register("email")}
              placeholder="Escreva seu Email"
            ></input>
            <p>{errors.email?.message}</p>

            <label>telefone:</label>
            <input
              type="tel"
              name="telephoneNumber"
              {...register("telephoneNumber")}
              className="adota-me-modal-form-input"
              placeholder="Deixa aquí seu telefone..."
              pattern="^[0-9]+"
              title="apenas números permitidos"
            />
            <p>{errors.telephoneNumber?.message}</p>

            <button>confirmar</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AdoptaMeCard;
