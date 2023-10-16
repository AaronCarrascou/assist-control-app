import axios from 'axios';

const BASE_URL = 'http://localhost:8080/employee';

export const getAllEmployees = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreateEmployee = async (employeeData) => {
    try {
        const response = await axios.post(`${BASE_URL}/create_employee`, employeeData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const deleteEmployeeById = async (employeeId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${employeeId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};