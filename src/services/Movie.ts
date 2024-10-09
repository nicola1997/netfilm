import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/movies'; // Replace this with your actual base URL

export const getMovie = async () => {
    try {
        const response = await axios.get(BASE_URL + "/getAllMovies", {});
        console.log(response.data)
        return response.data;
    } catch (error) {
        //throw error;
    }
};

export const uploadContingentiExcel = async (fileContingenti: any, idSel: number, codTipCan: any) => {
    try {
        const response = await axios.post(BASE_URL + "/uploadContingentiExcel", fileContingenti, {
            params: {
                idSel: idSel,
                codTipCan: codTipCan
            }
        });
        return response.data;
    } catch (error) {
        //throw error;
    }
}