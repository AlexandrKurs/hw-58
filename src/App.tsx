import './App.css'
import { useState } from 'react';
import Modal from './components/UI/Modal/Modal.tsx';
import Alert from './components/UI/Alert/Alert.tsx';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cancel = () => setShowModal(prevState => !prevState);
  const addButtons = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];

  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = () => setShowAlert(false);

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

      <hr/>

      <div>
        {showAlert ?
          <Alert type="success" clickDismissable>Text Alert</Alert> : null
        }
      </div>
    </div>
  )
};

export default App;