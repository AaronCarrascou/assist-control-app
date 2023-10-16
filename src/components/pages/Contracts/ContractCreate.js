import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateContract({ onSave }) {
  const [contractName, setContractName] = useState('');
  const [description, setDescription] = useState('');
  const [contractNameError, setContractNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSave = () => {
    // Error messages
    setContractNameError('');
    setDescriptionError('');

    let isValid = true;

    // Validate contract name
    if (contractName.trim() === '') {
      setContractNameError('Contract name is required.');
      isValid = false;
    }

    // Validate description
    if (description.length < 10) {
      setDescriptionError('Description must be at least 10 characters long.');
      isValid = false;
    }

    if (isValid) {
      onSave({
        contract_name: contractName,
        description: description,
      });
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label className='fw-bold'>Contract Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contract name"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
          required
          maxLength={100}
        />
        <Form.Text className="text-danger fw-light">{contractNameError}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label className='mt-4 fw-bold'>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter contract description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          minLength={10}
          maxLength={100}
        />
        <Form.Text className="text-danger fw-light">{descriptionError}</Form.Text>
      </Form.Group>
      
      <div className='mt-4 d-flex justify-content-end'>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Form>
  );
}

export default CreateContract;