import { useEffect, useState } from "react";
import Customer from "../../Model/Customer";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCustomersCustomerService } from "../../services/CustomerService";
import "../../styles/Customer.css";
import "../../styles/Trip.css"


const ViewAllCustomers = () => {
  const [AllCustomers, setallCustomers] = useState([]);

  useEffect(() => {
    viewAllCustomersCustomerService()
      .then((response) => {
        setallCustomers(response.data);
      })
      .catch(() => {
        alert("Error Occured");
      });
  }, [])

  // const getAllCustomers = (e) => {
  // };

  return (
    <div>
      {/* <input
        type="submit"
        className="btn btn-success mt-3"
        value="Customers"
        onClick={getAllCustomers}
      /> */}
      <div className="container">
        {AllCustomers.length > 1 && (
          <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3">
            {/* <label className="text-primary">
              <h3>Customers </h3>
            </label> */}
            <div class="">
            <table className="table">
            {/* <table class="table table-light"> */}
                <thead>
                  <tr>
                    <th>customerId</th>
                    <th>userName</th>
                    {/* <th>password</th> */}
                    <th>address</th>
                    <th>mobileNumber</th>
                    <th>email</th>
                    <th>role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCustomers.map((e, index) => (
                    <tr key={index}>
                      <td>{e.customerId}</td>
                      <td>{e.userName}</td>
                      {/* <td>{e.password}</td> */}
                      <td>{e.address}</td>
                      <td>{e.mobileNumber}</td>
                      <td className="text-truncate">{e.email}</td>
                      <td>{e.role}</td>
                      <td className={`${e.status === "Active" ? "text-success" : "text-danger"}`}>{e.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewAllCustomers;
