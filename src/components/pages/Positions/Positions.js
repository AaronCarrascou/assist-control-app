import React, { useState, useEffect } from 'react';
import { deletePositionById, getAllPositions, postCreatePosition } from '../../../services/PositionService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CommonModal from '../../shared/CommonModal';
import CreatePosition from './PositionCreate';
import Alert from 'react-bootstrap/Alert';

function Positions() {

  const [positions, setPositions] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const getPositions = async () => {
      const positions = await getAllPositions();
      setPositions(positions);
    };
    getPositions();
  }, []);

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };
  


  const handleCreatePosition = async (positionData) => {
    try{
      await postCreatePosition(positionData);
  
      setShowCreateModal(false);
    
      const updatedPositions = await getAllPositions();
      setPositions(updatedPositions);
    }catch (error){
      console.error('Error to create position', error);
    }

  };
  
  const handleDelete = async (id) => {
    try {
      await deletePositionById(id);
      const updatedPositions = await getAllPositions();
      setPositions(updatedPositions);
    } catch (error) {
      if (error.response?.data === 'Position has employees.') {
        setAlertMessage('Position has employees.');
        setShowAlert(true);
      } else {
        console.error('Error deleting position.', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Positions list</h2>
        <Button variant="primary" onClick={handleShowCreateModal}>
          Add position
          </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th  className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.id}>
              <td>{position.id}</td>
              <td>{position.position_name}</td>
              <td>{position.description}</td>
              <td className="text-center">
               
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Delete</Tooltip>}
                >
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(position.id)}
                  >
                   X

                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CommonModal
        showModal={showCreateModal}
        setShowModal={setShowCreateModal}
        title="Add position"
        form={<CreatePosition onSave={handleCreatePosition} />}
      />

      {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
      )}
    </div>
  );
}
export default Positions;