import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from 'react-modal';

export function Header() {

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="at money" />
        <button onClick={handleOpenNewTransactionModal} type="button">Nova transação</button>
      </Content>

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
       
      <h1>Modal</h1>
      </Modal>
    </Container>
  );
}
