import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
// import AppUser from '../models/AppUser';
import { registerService } from "../../services/AuthService";
import Customer from "../../Model/Customer";
import validator from 'validator';

const Register = () => {
  const history = useHistory();

  const [appUser, setAppUser] = useState(new Customer());
  const [credentials, setCredentials] = useState("");

  const [dis, setDis] = useState({
    email: false,
    password: false,
    mobile: false
  });

  const handleAppUser = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setAppUser({
      ...appUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitAppUser = (event) => {
    event.preventDefault();
    if (validator.isEmail(appUser.email)) {
      if (validator.isStrongPassword(appUser.password)) {
        if (validator.isMobilePhone(appUser.mobileNumber)) {
          registerService(appUser)
            .then((response) => {
              console.log(response.data);
              alert("You are registered successfully. Please login now.");
              history.push("/login"); // check this method to navigate
            })
            .catch((error) => {
              console.log(error.response);
              setCredentials("Enter proper credentials.");
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
    <center>
      <div className="container">
        <div className="w-50 shadow bg-white" style={{ borderRadius: "10px" }}>
          <form
            className="p-3 justify-content-center mt-5 form form-group form-dark"
            onSubmit={submitAppUser}
          >
            <h1 className="display-4 text-primary">Register</h1>
            <div className="p-3">
              <input
                type="text"
                name="userName"
                id="userName"
                className="form-control mb-3"
                placeholder="Enter username"
                value={appUser.userName}
                onChange={handleAppUser}
                required
                autoFocus
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control mb-3"
                placeholder="Enter Email"
                value={appUser.email}
                onChange={handleAppUser}
              />


              {(dis.email) && <div className="text-danger">
                invalid Email Address
              </div>}
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mb-3"
                placeholder="Enter password"
                value={appUser.password}
                onChange={handleAppUser}
              />

              {(dis.password) && <div className="text-danger">
                Password Should contain atleast one uppercase, one small case, one numeric value and one special character
              </div>}
              <input
                type="number"
                name="mobileNumber"
                id="phone"
                className="form-control mb-3"
                placeholder="Enter Phone number"
                value={appUser.mobileNumber}
                onChange={handleAppUser}
              />
              {(dis.mobile) && <div className="text-danger">
                invalid Mobile Number
              </div>}
              <input
                type="text"
                name="address"
                id="address"
                className="form-control mb-3"
                placeholder="Enter Address"
                value={appUser.address}
                onChange={handleAppUser}
              />

              <div className="form-group">
                <select
                  className="form-control mb-3"
                  name="role"
                  id="role"
                  onChange={handleAppUser}
                >
                  <option className="text-muted" value="Role">
                    Select a role
                  </option>
                  <option value="ADMIN">Admin</option>
                  <option value="CUSTOMER">Customer</option>
                </select>
              </div>
              <input
                type="submit"
                id="submit"
                name="submit"
                className="w-75 form-control btn btn-success mb-3"
                value="Register"
                onClick={submitAppUser}
              />
              <p className="text-danger">{credentials}</p>
              <p>
                Already a Member?{" "}
                <Link to="/login">
                  <strong style={{ fontWeight: "bolder", color: "blueviolet" }}>
                    Login
                  </strong>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div>
          {/* https://material.io/components/dialogs/web#alert-dialog */}
        </div>
      </div>
    </center>
  );
};
export default Register;
