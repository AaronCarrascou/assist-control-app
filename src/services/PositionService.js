import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

export const getAllPositions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}position`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreatePosition = async (positionData) => {
    try {
        const response = await axios.post(`${BASE_URL}position`, positionData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getPositionById = async (positionId) => {
    try {
        const response = await axios.get(`${BASE_URL}position/${positionId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};