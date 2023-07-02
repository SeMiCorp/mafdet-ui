import api from '../core'

const baseUrl = import.meta.env.VITE_CATS_API_URL;
const serviceName = 'Cats Service ';

export const getCats = async (params) => {
    try {
        return await api.get(baseUrl + 'api/cats', params);
    } catch (error) {
        throw new Error(serviceName + ' getCats function threw ' + error);
    }
};