import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:8088/cab`;
const getCabByIdService = (cabId) => {
    console.log(cabId);
    return axios.get(`${springBootAppUrl}get-cab-by-id/${cabId}`);
}

const insertCab = () => {
    return axios.get(`${springBootAppUrl}insert-cab`);
}
const updateCab = () => {
    console.log(`getCabByIdService`);
    return axios.get(`${springBootAppUrl}update-cab`);
}
const deleteCab = () => {
    console.log(`getCabByIdService`);
    return axios.get(`${springBootAppUrl}delete-cab`);
}
const viewCabsofType = (cabType) => {
    return axios.get(`${springBootAppUrl}/viewCabsOfType/${cabType}`);
}
// const countCabsofType = (cabType) => {
//     return axios.get(`${springBootAppUrl}/countCabsOfType/${cabType}`);
// }
export { getCabByIdService, insertCab, updateCab, deleteCab,viewCabsofType };