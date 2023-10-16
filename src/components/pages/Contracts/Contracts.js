import React, { useState, useEffect } from 'react';
import { deleteContractById, getAllContracts, postCreateContract } from '../../../services/ContractService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CommonModal from '../../shared/CommonModal';
import CreateContract from './ContractCreate';
import Alert from 'react-bootstrap/Alert';

function Contracts() {

  const [contracts, setContracts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  useEffect(() => {
    const getContracts = async () => {
      const contracts = await getAllContracts();
      setContracts(contracts);
    };
    getContracts();
  }, []);


  const handleCreate = async (contractData) => {
    try {
      // Create contract
      await postCreateContract(contractData);
  
      // CLose modal
      setShowCreateModal(false);

      // Update contract
      const updatedContracts = await getAllContracts();
      setContracts(updatedContracts);
        
    } catch (error) {
      
      console.error('Error to create contract', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContractById(id);
      const updatedContracts = await getAllContracts();
      setContracts(updatedContracts);
    } catch (error) {
      if (error.response?.data === 'Contract has employees.') {
        setAlertMessage('Contract has employees.');
        setShowAlert(true);
      } else {
        console.error('Error deleting contract.', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 >Contracts list</h2>
        <Button variant="primary" onClick={() => setShowCreateModal(true)}>
          Add contract
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
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.contract_name}</td>
              <td>{contract.description}</td>
              <td className="text-center">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Delete</Tooltip>}>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(contract.id)}>
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
        title="Add Contract"
        form={<CreateContract onSave={handleCreate} />}
      />

      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
    </div>
  );
}

export default Contracts;