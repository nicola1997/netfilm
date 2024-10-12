import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/movies'; // Replace this with your actual base URL
//const BASE_URL = 'https://netfilm-be.onrender.com/api/movies'; // Replace this with your actual base URL
//https://netfilm-be.onrender.com
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
        debugger
        const response = await axios.post(BASE_URL + "/saveUser", userData);
        return response.data;
    } catch (error) {

    }
}
export const login = async (userData) => {
    debugger
    try {
        const response = await axios.post(BASE_URL + "/login", userData);
        return response.data;
    } catch (error) {

    }
}