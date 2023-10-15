import React from 'react';
import { Modal } from 'react-bootstrap';

const CommonModal = ({ showModal, setShowModal, title, form }) => {

  const handleCloseModal = () => setShowModal(false);
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          contenido modal
        </Modal.Body>

      </Modal>
    </div>
  );
};

export default CommonModal;