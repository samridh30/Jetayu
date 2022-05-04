import axios from "axios";
const springBootAppUrl = `http://localhost:8088/driver`;

// Insert
const insertDriver = (Driver) => {
  return axios.post(`${springBootAppUrl}/insert-driver`, Driver);
};

// Update Driver
const updateDriver = (Driver) => {
  return axios.put(`${springBootAppUrl}/update-driver`, Driver);
};

//Driver Rating

const driverRating = (Ratedto) => {
  return axios.put(`${springBootAppUrl}/rate-driver`, Ratedto);
};

// View all Drivers

const viewAllDrivers = () => {
  return axios.get(`${springBootAppUrl}/view-all-drivers`);
};

// View Best Drivers

const viewBestDrivers = () => {
  return axios.get(`${springBootAppUrl}/best-drivers`);
};

// View Drivers
const viewDriver = (driverId) => {
  return axios.get(`${springBootAppUrl}/view-drivers/${driverId}`);
};


export {
  insertDriver,
  updateDriver,
  viewAllDrivers,
  viewBestDrivers,
  viewDriver,
  driverRating,
};
