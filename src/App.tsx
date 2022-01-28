import { GlobalStyle } from "./styles/global";
import { Header } from "../src/components/Header";
import { Dashboard } from "../src/components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionMoral={handleOpenNewTransactionModal} />
      <Dashboard/>

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
       
      <h1>Modal</h1>
      </Modal>

      <GlobalStyle />
    </>
  );
}
