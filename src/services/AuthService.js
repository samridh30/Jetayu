import axios from "axios";

const springBootAppUrl = `http://localhost:8088/`;

// Register

const registerService = (appUser) => {
  console.log(appUser);
  return axios.post(`${springBootAppUrl}Customer/register`, appUser);
};

// Login

const loginService = (appUser) => {
  console.log(appUser);
  let temp = axios.post(`${springBootAppUrl}Customer/login`, appUser);
  console.log(temp);
  return temp;
};

// Logout

const logoutService = () => {
  return axios.get(`${springBootAppUrl}Customer/logout`);
};

//view All Customers

const viewCustomer = () => {
  // console.log(appUser);
  let temp = axios.get(`${springBootAppUrl}Customer/viewCustomer`);
  console.log(temp);
  return temp;
};

export { registerService, loginService, logoutService, viewCustomer };
