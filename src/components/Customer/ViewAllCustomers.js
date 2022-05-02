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
      <div className="">
        {AllCustomers.length > 1 && (
          <div className="m-auto scrollit">
            {/* <label className="text-primary">
              <h3>Customers </h3>
            </label> */}
            <div class="">
              <table className="table table-bordered table-light">
                <thead className="thead-dark">
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
                      <td className={`text-light`} style={e.status === "Active" ? { backgroundColor: '#198754' } : { backgroundColor: '#dc3545' }}>{e.status}</td>
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
