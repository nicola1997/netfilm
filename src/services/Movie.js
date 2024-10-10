import axios from 'axios';

const BASE_URL = 'https://netfilm-be.onrender.com/api/movies'; // Replace this with your actual base URL

export const getMovie = async () => {
    try {
        const response = await axios.get(BASE_URL + "/getAllMovies", {});
        return response.data;
    } catch (error) {
        //throw error;
    }
};

export const setUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL + "/saveUser", userData);
        return response.data;
    } catch (error) {
        //throw error;
    }
}