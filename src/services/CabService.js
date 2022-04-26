import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:8088/`;
const getCabByIdService = (cabId) => {
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
const deleteCab = () => {
    console.log(`getCabByIdService`);
    return axios.get(`${springBootAppUrl}cab/delete-cab`);
}
// const viewCabsofType = () => {
//     console.log(`getEmpByIdService`);
//     return axios.get(`${springBootAppUrl}emp/get-all-employees`);
// }
// const countCabsofType = () => {
//     console.log(`getEmpByIdService`);
//     return axios.get(`${springBootAppUrl}emp/get-all-employees`);
// }
export { getCabByIdService, insertCab, updateCab, deleteCab };