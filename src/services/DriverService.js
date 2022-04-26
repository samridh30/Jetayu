import axios from 'axios';
const springBootAppUrl = `http://localhost:8088/driver`;
const insertDriver = (driver) => {
    return axios.post(`${springBootAppUrl}/insert-driver`, driver);
}
const updateDriver = (driver) => {
    return axios.put(`${springBootAppUrl}/update-driver`, driver);
}


const viewaAllDrivers = () => {
    return axios.get(`${springBootAppUrl}/view-all-drivers`);
}

const viewBestDrivers = () => {
    return axios.get(`${springBootAppUrl}/best-drivers`);
}
const viewDriver = (driverId) => {
    return axios.get(`${springBootAppUrl}/view-drivers/${driverId}`);
}
export {insertDriver,updateDriver,viewaAllDrivers,viewBestDrivers,viewDriver}