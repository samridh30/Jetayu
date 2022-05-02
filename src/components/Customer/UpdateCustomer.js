import { useState } from "react";
import Customer from "../../Model/Customer";
import { updateCustomerService } from "../../services/CustomerService";
import DisableCustomer from './DisableCustomer'
import validator from 'validator';


const UpdateCustomer = () => {
  const [updatecustomerstate, setupdatecustomerstate] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  const handleUpdate = (e) => {
    console.log(e.target.value);
    setupdatecustomerstate({
      ...updatecustomerstate,
      [e.target.name]: e.target.value,
    });
  };


  const [dis, setDis] = useState({
    email: false,
    password: false,
    mobile: false
  });

  const UpdateCustomerMethod = (e) => {
    e.preventDefault();
    console.log("Before Update");
    console.log(updatecustomerstate);
    if (validator.isEmail(updatecustomerstate.email)) {
      if (validator.isStrongPassword(updatecustomerstate.password)) {
        if (validator.isMobilePhone(updatecustomerstate.mobileNumber.toString())) {
          updateCustomerService(updatecustomerstate)
            .then((response) => {
              localStorage.setItem("loggedInUser", JSON.stringify(response.data));
              console.log("After Update");
              console.log(response.data);
              alert("Updated Succesfully");
              // history.push("/");
            })
            .catch(() => {
              console.log("Catch");
              alert("Error Occured");
            });
        }
        else {
          setDis({
            mobile: true
          })
        }
      }
      else {
        // alert("Password Should contain atleast one uppercase, one small case, one numeric value and one special character")
        setDis({ password: true })
      }
    }
    else {
      // alert("Email not Valid")
      setDis({ email: true })
    }
  };

  return (
    <div className="w-100" style={{ marginTop: '100px' }}>
      <div className="card mt-3 ml-3 mb-10 bg-light col-lg-7 m-auto">
        <div className="card-body text-left  roundered col-md-auto mb-10">
          <div>
            <h4 className="card-header">
              <center>View Details </center>
            </h4>
            <label className="text-primary">UserName</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.userName}
            />
            <label className="text-primary"> Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.address}
            />
            <label className="text-primary">MobileNumber</label>
            <input
              type="number"
              name="mobileNumber"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.mobileNumber}
            />
            {(dis.mobile) && <div className="text-danger">
              invalid Mobile Number
            </div>}
            <label className="text-primary">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.password}
            />
            {(dis.password) && <div className="text-danger">
              Password Should contain atleast one uppercase, one small case, one numeric value and one special character
            </div>}
            <label className="text-primary">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.email}
            />
            {(dis.email) && <div className="text-danger">
              invalid Email Address
            </div>}

            <input
              type="submit"
              className="btn btn-success form-control mt-3"
              value="Update"
              onClick={UpdateCustomerMethod}
            />
            <DisableCustomer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateCustomer;
