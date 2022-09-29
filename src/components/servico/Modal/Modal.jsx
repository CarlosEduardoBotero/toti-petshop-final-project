import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const ModalContainer = ({
  children,
  onClose,
  isOpen,
  modalHasBeenOpen,
  setModalHasBeenOpen,
}) => {
  const backdropRef = useRef();
  const modalChildreContainerRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      backdropRef.current.classList.add("modal-opacity-1", "fadeIn");
      modalChildreContainerRef.current.classList.add(
        "modal-opacity-1",
        "fadeIn"
      );
    }, 1);
  }, []);

  useEffect(() => {
    if (!isOpen && modalHasBeenOpen) {
      backdropRef.current.classList.remove("modal-opacity-1");
      modalChildreContainerRef.current.classList.remove("modal-opacity-1");
      document.body.removeAttribute("style");

      setTimeout(() => {
        setModalHasBeenOpen(false);
      }, 250);
    }
  }, [isOpen, modalHasBeenOpen]);

  const handleClose = () => {
    backdropRef.current.classList.remove("modal-opacity-1");
    modalChildreContainerRef.current.classList.remove("modal-opacity-1");
    document.body.removeAttribute("style");

    setTimeout(() => {
      onClose();
      setModalHasBeenOpen(false);
    }, 250);
  };

  return (
    <div className="modal-container">
      <div
        className={`modal-backdrop`}
        onClick={handleClose}
        ref={backdropRef}
      />
      <div className="modal-children-container" ref={modalChildreContainerRef}>
        {children}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  const [modalHasBeenOpen, setModalHasBeenOpen] = useState(false);

  useEffect(() => {
    isOpen && setModalHasBeenOpen(true);
  }, [isOpen]);

  if (isOpen || (!isOpen && modalHasBeenOpen)) {
    return createPortal(
      <ModalContainer
        onClose={onClose}
        isOpen={isOpen}
        modalHasBeenOpen={modalHasBeenOpen}
        setModalHasBeenOpen={setModalHasBeenOpen}
      >
        {children}
      </ModalContainer>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;
