import { useState } from "react";
import Customer from "../../Model/Customer";
import { updateCustomerService } from "../../services/CustomerService"

const UpdateCustomer = () => {

  const [updatecustomerstate, setupdatecustomerstate] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

  const handleUpdate = (e) => {
    console.log(e.target.value)
    setupdatecustomerstate({
      ...updatecustomerstate,
      [e.target.name]: e.target.value,
    });

  }

  const UpdateCustomerMethod = (e) => {
    e.preventDefault();
    console.log("Before Update")
    console.log(updatecustomerstate)
    updateCustomerService(updatecustomerstate)
      .then((response) => {
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        console.log("After Update")
        console.log(response.data);
        alert("Updated Succesfully");
        // history.push("/");
      })
      .catch(() => {
        console.log('Catch')
        alert("Error Occured");
      });
  };


  return (
    <div >
      <div className="card mt-3 ml-3 col-lg-7 mb-10">
        <div className="card-body text-left roundered col-md-auto mb-10">
          <div>
            <h4 className="card-header">
              <center>Update Details </center>
            </h4>
            {/* <label>Customer Id</label>
            <input
              type="text"
              name="customerId"
              className="form-control "
              onChange={handleUpdate}
              value={updatecustomerstate.customerId}
            /> */}
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
              type="text"
              name="mobileNumber"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.mobileNumber}
            />
            <label className="text-primary">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleUpdate}
              value={updatecustomerstate.email}
            />

            <input
              type="submit"
              className="btn btn-success form-control mt-3"
              value="Update"
              onClick={UpdateCustomerMethod}
            />

          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateCustomer;