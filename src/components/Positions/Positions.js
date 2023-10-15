import React, { useState, useEffect } from 'react';
import { getAllPositions } from '../../services/PositionService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Positions() {

  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    const getPositions = async () => {
      const positions = await getAllPositions();
      setPositions(positions);
    };
    getPositions();
  }, []);

  const handleDelete = (id) => {
    // Aquí puedes agregar la lógica para eliminar un contrato por su ID
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Positions list</h2>
        <Button variant="primary">Add position</Button>
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
    </div>
  );
}
export default Positions;