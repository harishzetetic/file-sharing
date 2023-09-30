import axios from "axios";

const API_URL = "http://localhost:8083"
export const uploadFile = async (data) => {
    try{
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data
    } catch(e) {
        console.error("Error while calling the API", e)
    }
}