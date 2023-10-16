import axios from 'axios';

const BASE_URL = 'http://localhost:8080/position';

export const getAllPositions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const postCreatePosition = async (positionData) => {
    try {
        const response = await axios.post(`${BASE_URL}/create_position`, positionData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const deletePositionById = async (positionId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${positionId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};