import React from "react";

import {
  ModalBody,
  ModalButtonConfirm,
  ModalButtonDeny,
  ModalTitle,
  ModalSubTitle,
} from "./styles";

import Modal from "@material-ui/core/Modal";

const NewCartModal = (props) => {
  const { open, onClose, newCartAddProduct } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <ModalTitle>Você já tem itens adicionados na sua sacola</ModalTitle>
        <ModalSubTitle>Deseja limpar a sacola?</ModalSubTitle>

        <ModalButtonConfirm onClick={newCartAddProduct}>Sim</ModalButtonConfirm>
        <ModalButtonDeny onClick={onClose}>Nao</ModalButtonDeny>
      </ModalBody>
    </Modal>
  );
};

export default NewCartModal;
