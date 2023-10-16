import React from 'react';

function EmployeeDetail({ employee }) {
  return (
    <div>
      <div>
        <h5>Employee: {employee.employee_name}</h5>
        <p><strong>Address</strong> <br></br> {employee.address}</p>
        <p><strong>Cell Number</strong> <br></br> {employee.cell_number}</p>
        <p><strong>Position</strong> <br></br> {employee.position.position_name}</p>
        <p><strong>Contract</strong> <br></br> {employee.contract.contract_name}</p>
      </div>
    </div>
  );
}

export default EmployeeDetail;