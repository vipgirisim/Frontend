import http from "../../services/http-common-upload";
const apiUrl = "http://localhost:8080/admin/"

export const singleFileUpload = async (data, options) => {
    try {
        await http.post(apiUrl + 'singleFile', data, options);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await http.get(apiUrl + 'getSingleFiles');
            return data;
    } catch (error) {
        throw error;
    }
}

export const multipleFilesUpload = async (data, options) => {
    try {
        await http.post(apiUrl + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}
export const getMultipleFiles = async () => {
    try{
        const {data} = await http.get(apiUrl + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}