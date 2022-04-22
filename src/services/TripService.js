import axios from 'axios';
const springBootAppUrl = `http://localhost:8088/Trip`;

const bookCabService = (trip) => {
    return axios.post(`${springBootAppUrl}/bookCab`,trip);
}

const updateTripService = (trip) => {
    return axios.put(`${springBootAppUrl}/update`, trip);
}

const viewTripService = () => {
    return axios.get(`${springBootAppUrl}/view`);
}

const endTripService = () => {
    return axios.put(`${springBootAppUrl}/endTrip`);
}

export {bookCabService, updateTripService,viewTripService,endTripService};