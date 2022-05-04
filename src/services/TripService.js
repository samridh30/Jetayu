import axios from "axios";
const springBootAppUrl = `http://localhost:8088/Trip`;


// Book Cab
const bookCabService = (trip) => {
  return axios.post(`${springBootAppUrl}/bookCab`, trip);
};

// Update Trip
const updateTripService = (trip) => {
  return axios.put(`${springBootAppUrl}/update`, trip);
};

// View Trips
const viewTripService = () => {
  return axios.get(`${springBootAppUrl}/view`);
};

// View ALl Trips

const viewAllTripDataService = () => {
  return axios.get(`${springBootAppUrl}/viewAllTripData`);
};


// View Trips by Id
const viewTripByIdService = (Id) => {
  console.log(Id);
  return axios.get(`${springBootAppUrl}/viewAll/${Id}`);
};

// End Trip
const endTripService = () => {
  return axios.put(`${springBootAppUrl}/endTrip`);
};

export {
  bookCabService,
  updateTripService,
  viewTripService,
  endTripService,
  viewTripByIdService,
  viewAllTripDataService,
};
