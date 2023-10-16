import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateEmployee({ onSave, contracts, positions }) {
  const [employeeName, setEmployeeName] = useState('');
  const [address, setAddress] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [selectedContract, setSelectedContract] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  const [employeeNameError, setEmployeeNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cellNumberError, setCellNumberError] = useState('');
  const [selectedContractError, setSelectedContractError] = useState('');
  const [selectedPositionError, setSelectedPositionError] = useState('');

  const handleSave = () => {
    setEmployeeNameError('');
    setAddressError('');
    setCellNumberError('');
    setSelectedContractError('');
    setSelectedPositionError('');

    let isValid = true;

    if (employeeName.trim() === '') {
      setEmployeeNameError('Employee name is required.');
      isValid = false;
    }

    if (address.trim() === '' || address.length < 5) {
      setAddressError('Address must be at least 5 characters long.');
      isValid = false;
    }

    if (cellNumber.trim() === '' || cellNumber.length < 5) {
      setCellNumberError('Cell number must be at least 5 characters long.');
      isValid = false;
    }

    if (selectedContract === '') {
      setSelectedContractError('Contract is required.');
      isValid = false;
    }

    if (selectedPosition === '') {
      setSelectedPositionError('Position is required.');
      isValid = false;
    }

    if (isValid) {
      const newEmployee = {
        employee_name: employeeName,
        address: address,
        cell_number: cellNumber,
        position: { id: selectedPosition },
        contract: { id: selectedContract },
      };

      onSave(newEmployee);
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label  className='fw-bold'>Employee Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter employee name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          minLength={10}
          required
        />
        <Form.Text className="text-danger fw-light">{employeeNameError}</Form.Text>
      </Form.Group>

      <Form.Group className="mt-2 fw-bold">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          minLength={5}
          required
        />
        <Form.Text className="text-danger fw-light">{addressError}</Form.Text>
      </Form.Group>

      <Form.Group className="mt-2 fw-bold">
        <Form.Label>Cell Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter cell number"
          value={cellNumber}
          onChange={(e) => setCellNumber(e.target.value)}
          minLength={5}
          required
        />
        <Form.Text className="text-danger fw-light">{cellNumberError}</Form.Text>
      </Form.Group>

      <Form.Group className="mt-2 fw-bold">
        <Form.Label>Contract</Form.Label>
        <Form.Control
          as="select"
          value={selectedContract}
          onChange={(e) => setSelectedContract(e.target.value)}
          required
        >
          <option value="">Select Contract</option>
          {contracts.map((contract) => (
            <option key={contract.id} value={contract.id}>
              {contract.contract_name}
            </option>
          ))}
        </Form.Control>
        <Form.Text className="text-danger fw-light">{selectedContractError}</Form.Text>
      </Form.Group>

      <Form.Group className="mt-2 fw-bold">
        <Form.Label>Position</Form.Label>
        <Form.Control
          as="select"
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          required
        >
          <option value="">Select Position</option>
          {positions.map((position) => (
            <option key={position.id} value={position.id}>
              {position.position_name}
            </option>
          ))}
        </Form.Control>
        <Form.Text className="text-danger fw-light">{selectedPositionError}</Form.Text>
      </Form.Group>

      <div className="mt-2 fw-bold d-flex justify-content-end">
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Form>
  );
}

export default CreateEmployee;