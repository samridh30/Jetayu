import { useEffect, useState } from "react";
import Customer from "../../Model/Customer";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCustomersCustomerService } from "../../services/CustomerService";
import "../../styles/Customer.css";
import "../../styles/Trip.css"
import { deleteCustomerService } from "../../services/CustomerService";
import { useHistory } from "react-router";
import DisableCustomer from "./DisableCustomer";


const ViewAllCustomers = () => {
  const [AllCustomers, setallCustomers] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    viewAllCustomersCustomerService()
      .then((response) => {
        setallCustomers(response.data);
      })
      .catch(() => {
        alert("Error Occured");
      });
  }, [])

  const test = (id) => {
    setId(id)
    console.log(id)
  }
  const DisableCustomerAccount = (id) => {
    // var proceed = window.confirm("Your Account will be permenantly deleted. Are you sure you want to proceed?");
    if (id) {
      console.log("deleted", id)
      // deleteCustomerService(id)
      //   .then((response) => {
      //     console.log(response.data);
      //     // localStorage.removeItem("loggedInUser");
      //     // // history.push("/");
      //     // window.location.reload(true);
      //   })
      //   .catch(() => {
      //     alert("Error Occured");
      //   });
    } else {
      console.log("Cancelled")
    }
  }

  return (
    <div>
      {/* <input
        type="submit"
        className="btn btn-success mt-3"
        value="Customers"
        onClick={getAllCustomers}
      /> */}
      <div className="container">
        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 scrollit">
          <p className="text-dark text-center font-weight-bold lead">
            List of All Customers
          </p>
          {AllCustomers.length > 1 && (
            <div class="p-1">
              <table className="table border border-dark">
                {/* <table class="table table-light"> */}
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
                      <td className={`text-light pt-3`} style={e.status === "Active" ? { backgroundColor: '#198754' } : { backgroundColor: '#dc3545' }}>
                        {
                          e.status === "Active" && e.role === "CUSTOMER" ?
                            // <input type='submit' className="bg-danger shadow shadow-large" style={{ borderRadius: '5px' }} value="Disable" />
                            <span className="font-weight-lighter" style={{ fontSize: '20px' }}>{e.status}</span> :
                            <span className="font-weight-lighter" style={{ fontSize: '20px' }}>{e.status}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default ViewAllCustomers;
