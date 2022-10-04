import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdoptaMeCard from "../adoptaMe/AdoptaMeCard";
import "./PetConfirmation.css";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";

const PetConfirmation = () => {
  const [petsData, setPetsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petIdToBeDelete, setPetIdToBeDelete] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/adotar");
      const data = await response.json();
      setPetsData(data);
      console.log(data);
    } catch (error) {}
  };

  const deletePet = async (petID) => {
    try {
      const deletePet = await fetch(`http://localhost:3001/adotar/${petID}`, {
        method: "DELETE",
      });
      setPetsData((prev) => prev.filter((item) => item.id !== petID));
      console.log(deletePet);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pet-confirmation-container">
      <h1 className="pet-confirmation-title">Adoções em andamento</h1>
      <Link to="/adote-me" className="pet-confirmation-link">
        <FaArrowLeft />
        Adotar Pets
      </Link>
      <div className="pet-confirmation-cards-container">
        {petsData.map((item) => (
          <AdoptaMeCard
            titulo={item.titulo}
            imagen={item.imagen}
            genero={item.genero}
            buttonText="Cancelar"
            onClick={() => {
              setIsModalOpen(true);
              setPetIdToBeDelete(item.id);
            }}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="pet-confirmation-modal-container">
          <h1>Tem certeza de que deseja cancelar a adoção?</h1>
          <div className="pet-confirmation-modal-container-delete-message">
            esta ação cancelará a petição de adoção
          </div>
          <button
            onClick={() => {
              setIsModalOpen(false);
              deletePet(petIdToBeDelete);
            }}
            className="pet-confirmation-modal-button"
          >
            confirmar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PetConfirmation;
