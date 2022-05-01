import axios from "axios";
const springBootAppUrl = `http://localhost:8088/driver`;
const insertDriver = (Driver) => {
  return axios.post(`${springBootAppUrl}/insert-driver`, Driver);
};
const updateDriver = (Driver) => {
  return axios.put(`${springBootAppUrl}/update-driver`, Driver);
};

const rateDriver = (Ratedto) => {
  return axios.put(`${springBootAppUrl}/rate-driver`, Ratedto);
};

const viewAllDrivers = () => {
  return axios.get(`${springBootAppUrl}/view-all-drivers`);
};

const viewBestDrivers = () => {
  return axios.get(`${springBootAppUrl}/best-drivers`);
};
const viewDriver = (driverId) => {
  return axios.get(`${springBootAppUrl}/view-drivers/${driverId}`);
};
export {
  insertDriver,
  updateDriver,
  viewAllDrivers,
  viewBestDrivers,
  viewDriver,
  rateDriver,
};
