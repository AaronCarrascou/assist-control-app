import React, { useState, useEffect } from 'react';
import { getAllContracts } from '../../services/ContractService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Contracts() {

  const [contracts, setContracts] = useState([]);
  
  useEffect(() => {
    const getContracts = async () => {
      const contracts = await getAllContracts();
      setContracts(contracts);
    };
    getContracts();
  }, []);


  const handleDelete = (id) => {
    // Aquí puedes agregar la lógica para eliminar un contrato por su ID
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 >Contracts list</h2>
        <Button variant="primary">Add contract</Button>
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
    </div>
  );
}

export default Contracts;