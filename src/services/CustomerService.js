import axios from 'axios';
const springBootAppUrl = `http://localhost:8088/Customer`;

const registerCustomerService = (appUser) => {
    return axios.post(`${springBootAppUrl}/register`,appUser);
}

const updateCustomerService = (customer) => {
    console.log(customer)
    return axios.put(`${springBootAppUrl}/update`,customer);
}

const deleteCustomerService = () => {
    return axios.post(`${springBootAppUrl}/delete`);
}

const loginCustomerService = (appUser) => {
    return axios.post(`${springBootAppUrl}/login`,appUser);
}

const logoutCustomerService = () => {
    return axios.post(`${springBootAppUrl}/logout`);
}

const viewAllCustomersCustomerService = () => {
    return axios.get(`${springBootAppUrl}/viewAllCustomers`);
}

const viewCustomerCustomerService = () => {
    return axios.post(`${springBootAppUrl}/viewCustomer`);
}

export{ registerCustomerService,updateCustomerService,deleteCustomerService,loginCustomerService,
    logoutCustomerService,viewAllCustomersCustomerService,viewCustomerCustomerService}