import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../../services/EmployeeService';
import { getAllContracts } from '../../services/ContractService';
import { getAllPositions } from '../../services/PositionService';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CommonModal from '../shared/CommonModal';


function Employees() {
  const [employees, setEmployees] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterContract, setFilterContract] = useState('All');
  const [filterPosition, setFilterPosition] = useState('All');
  const [contracts, setContracts] = useState([]);
  const [positions, setPositions] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal


  useEffect(() => {
    const fetchData = async () => {
      const [employeeData, contractData, positionData] = await Promise.all([
        getAllEmployees(),
        getAllContracts(),
        getAllPositions(),
      ]);

      setEmployees(employeeData);
      setContracts(contractData);
      setPositions(positionData);
    };

    fetchData();
  }, []);

  const handleAddEmployeeClick = () => {
    setShowModal(true); // Muestra el modal al hacer clic en el botón
  };

  const filteredEmployees = employees.filter((employee) => {
    const nameMatch =
      employee.employee_name.toLowerCase().includes(filterName.toLowerCase()) ||
      filterName === '';

    const contractMatch =
      filterContract === 'All' || employee.contract.contract_name === filterContract;

    const positionMatch =
      filterPosition === 'All' || employee.position.position_name === filterPosition;

    return nameMatch && contractMatch && positionMatch;
  });

  const handleDelete = (id) => {
    // Aquí puedes agregar la lógica para eliminar un contrato por su ID
  };
  const handleDetail = (id) => {
    // Aquí puedes agregar la lógica para eliminar un contrato por su ID
  };

  return (
    <div className="container">
      <h1>Employees</h1>

      {/* Filter */}
      <div className="row mb-4">
        <div className="col">
          <Form.Group>
            <Form.Label className='fw-bold'>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group>
            <Form.Label className='fw-bold'>Position</Form.Label>
            <Form.Control
              as="select"
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
            >
              <option value="All">All</option>
              {positions.map((position) => (
                <option key={position.id} value={position.position_name}>
                  {position.position_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group>
            <Form.Label className='fw-bold'>Contract</Form.Label>
            <Form.Control
              as="select"
              value={filterContract}
              onChange={(e) => setFilterContract(e.target.value)}
            >
              <option value="All">All</option>
              {contracts.map((contract) => (
                <option key={contract.id} value={contract.contract_name}>
                  {contract.contract_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col d-flex align-items-end justify-content-end">
          <div>
            <Button variant="primary"  onClick={handleAddEmployeeClick}>Add Employee</Button>
          </div>
          <CommonModal showModal={showModal} setShowModal={setShowModal} title="Add Employee" />
        </div>
      </div>
      {/* Table filtered */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Contract</th>
            <th  className="text-center">Details</th>
            <th  className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.position.position_name}</td>
              <td>{employee.contract.contract_name}</td>
              <td className="text-center">
               
               <OverlayTrigger
                 placement="top"
                 overlay={<Tooltip>View detail</Tooltip>}
               >
                 <Button
                   variant="primary"
                   onClick={() => handleDetail(employee.id)}
                 >
                  Detail

                 </Button>
               </OverlayTrigger>
             </td>
              <td className="text-center">
               
               <OverlayTrigger
                 placement="top"
                 overlay={<Tooltip>Delete</Tooltip>}
               >
                 <Button
                   variant="danger"
                   onClick={() => handleDelete(employee.id)}
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

export default Employees;