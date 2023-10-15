import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

export const getAllContracts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}contract`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreateContract = async (contractData) => {
    try {
        const response = await axios.post(`${BASE_URL}contract`, contractData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getContractById = async (contractId) => {
    try {
        const response = await axios.get(`${BASE_URL}contract/${contractId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};