import axios from "axios";
const springBootAppUrl = `http://localhost:8088/Customer`;


// Register
const registerCustomerService = (appUser) => {
  return axios.post(`${springBootAppUrl}/register`, appUser);
};


// Update Customer
const updateCustomerService = (customer) => {
  console.log(customer);
  return axios.put(`${springBootAppUrl}/update`, customer);
};

// Delete

const deleteCustomerService = (customerId) => {
  return axios.delete(`${springBootAppUrl}/delete/${customerId}`);
};

//View all

const viewAllCustomersCustomerService = () => {
  return axios.get(`${springBootAppUrl}/viewAllCustomers`);
};

//View customer

const viewCustomerCustomerService = () => {
  return axios.post(`${springBootAppUrl}/viewCustomer`);
};

export {
  registerCustomerService,
  updateCustomerService,
  deleteCustomerService,
  // loginCustomerService,
  // logoutCustomerService,
  viewAllCustomersCustomerService,
  viewCustomerCustomerService,
};
