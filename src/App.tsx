import './App.css'
import { useState } from 'react';
import Modal from './components/UI/Modal/Modal.tsx';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cancel = () => setShowModal(prevState => !prevState);
  const addButtons = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];

  return (
    <div className="container">
      <Modal
        addButtons={addButtons}
        show={showModal}
        closeModal={cancel}
        title="Some kinda modal title"
      >
        <p>This is modal content</p>
      </Modal>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open modal</button>
    </div>
  )
};

export default App;