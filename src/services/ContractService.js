import axios from 'axios';

const BASE_URL = 'http://localhost:8080/contract';

export const getAllContracts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreateContract = async (contractData) => {
    try {
        const response = await axios.post(`${BASE_URL}/create_contract`, contractData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const deleteContractById = async (contractId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${contractId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};