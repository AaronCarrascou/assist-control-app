import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreatePosition({ onSave }) {
  const [positionName, setPositionName] = useState('');
  const [description, setDescription] = useState('');
  const [positionNameError, setPositionNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSave = () => {

    setPositionNameError('');
    setDescriptionError('');

    let isValid = true;

    if (positionName.trim() === '') {
      setPositionNameError('Position name is required.');
      isValid = false;
    }

    if (description.length < 10) {
      setDescriptionError('Description must be at least 10 characters long.');
      isValid = false;
    }

    if (isValid) {
      onSave({
        position_name: positionName,
        description: description,
      });
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label className='fw-bold'>Position Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter position name"
          value={positionName}
          onChange={(e) => setPositionName(e.target.value)}
          required
          maxLength={100}
        />
        <Form.Text className="text-danger fw-light">{positionNameError}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label className='mt-4 fw-bold'>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter position description"
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

export default CreatePosition;