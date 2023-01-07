import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      Front Beginners - Modal
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolore perspiciatis consequuntur animi possimus adipisci repudiandae
          nisi saepe atque a?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sunt natus odit cum! Officiis adipisci consequuntur necessitatibus amet eveniet iusto.
        </p>
      </Modal>
    </div>
  );
}

export default App;
