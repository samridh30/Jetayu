import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:8088/`;
const getCabById = (cabId) => {
    console.log(cabId);
    return axios.get(`${springBootAppUrl}cab/get-cab-by-id/${cabId}`);
}

const insertCab = () => {
    console.log(cab);
    return axios.get(`${springBootAppUrl}cab/insert-cab`);
}
const updateCab = () => {
    console.log(`getCabByIdService`);
    return axios.get(`${springBootAppUrl}cab/update-cab`);
}
const viewCabsofType = () => {
    return axios.get(`${springBootAppUrl}cab/viewCabsOfType`);
}
const viewAllCabs = () => {
    return axios.get(`${springBootAppUrl}emp/viewAllCabs`);
}
const countCabsofType = () => {
    return axios.get(`${springBootAppUrl}emp/countCabsOfType`);
}
export { getCabById, insertCab, updateCab, viewCabsofType, viewAllCabs,countCabsofType};