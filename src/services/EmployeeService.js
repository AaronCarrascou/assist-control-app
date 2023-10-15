import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

export const getAllEmployees = async () => {
    try {
        const response = await axios.get(`${BASE_URL}employee`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreateEmployee = async (employeeData) => {
    try {
        const response = await axios.post(`${BASE_URL}employee`, employeeData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getEmployeeById = async (employeeId) => {
    try {
        const response = await axios.get(`${BASE_URL}employee/${employeeId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};