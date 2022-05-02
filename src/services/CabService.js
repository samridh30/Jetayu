import axios from "axios";

// Create services for other components in this way.

const springBootAppUrl = `http://localhost:8088/cab`;
// const getCabByIdService= (cabId) => {
//     console.log(cabId);
//     return axios.get(`${springBootAppUrl}get-cab-by-id/${cabId}`);
// }

const insertCab = (Cab) => {
    return axios.post(`${springBootAppUrl}/insert-cab`, Cab);
};
const updateCab = (Cab) => {

    // console.log(`getCabByIdService`);
    return axios.put(`${springBootAppUrl}/update-cab`, Cab);
}
const deleteCab = () => {
    // console.log(`getCabByIdService`);
    return axios.get(`${springBootAppUrl}/delete-cab`);
}

const viewCabsofType = (cabType) => {
    return axios.get(`${springBootAppUrl}/viewCabsOfType/${cabType}`);
}
const viewAllCabs = (Cab) => {
    return axios.get(`${springBootAppUrl}/viewAll`, Cab);
}

const fetchCabById = (cabId) => {
    return axios.get(`${springBootAppUrl}/getCabById/${cabId}`);
}

const fetchAvailableCabs = () => {
    return axios.get(`${springBootAppUrl}/availableCabs`);
}
export { insertCab, updateCab, deleteCab, viewAllCabs, viewCabsofType, fetchCabById, fetchAvailableCabs };

