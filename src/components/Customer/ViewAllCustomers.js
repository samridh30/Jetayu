import { useEffect, useState } from "react"
import Customer from "../../Model/Customer";
import { useDispatch, useSelector } from "react-redux";
import {viewAllCustomersCustomerService} from '../../services/CustomerService'

const ViewAllCustomers=()=>{

    const[AllCustomers,setallCustomers]=useState([]);

    
    const getAllCustomers = (e) => {
        viewAllCustomersCustomerService()
          .then((response) => {
            setallCustomers(response.data);
          })
          .catch(() => {
            alert("Error Occured");
          });
      };

     
    return(
        <div >
            <input
            type='submit'
            className="btn btn-success mt-3"
            value='Customers'
            onClick={getAllCustomers}
            />
            <div>
            {AllCustomers.length>1 &&
                <div className="m-auto col-lg-10">
                    
                    <label className="text-primary"><h3>Customers </h3></label>
                    
                    <table className="table table-bordered table-light table-striped ">
                        <thead className="thead-dark">
                            <tr>
                                <th>customerId</th>
                                <th>userName</th>
                                <th>password</th>
                                <th>address</th>
                                <th>mobileNumber</th>
                                <th>email</th>
                                <th>role</th>
                            </tr>
                        </thead>
                        <tbody>
                        {AllCustomers.map((e, index) => (
                            <tr key={index}>
                                <td>{e.customerId}</td>
                                <td>{e.userName}</td>
                                <td>{e.password}</td>
                                <td>{e.address}</td>
                                <td>{e.mobileNumber}</td>
                                <td>{e.email}</td>
                                <td>{e.role}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    
        {/* <nav className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentpage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav> */}
    
                </div>
}
            </div>
    

        </div>
    )

}
export default ViewAllCustomers;