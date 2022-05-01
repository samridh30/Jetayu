import React, { useState } from "react";
import Driver from "../../Model/Driver";
import Cab from "../../Model/Cab";
import { insertDriver } from "../../services/DriverService";

const InsertDriver = () => {
  const [addDriver, setAddDriver] = useState(new Driver());
  const [cab, setCab] = useState(new Cab());

  const handleAddDriver = (e) => {
    setAddDriver({
      ...addDriver,
      [e.target.name]: e.target.value,
    });
    setCab({
      ...cab,
      [e.target.name]: e.target.value,
    });
  };
  const submitAddDriver = (evt) => {
    evt.preventDefault();
    let driverTemp = {
      ...addDriver,
      cab,
    };
    insertDriver(driverTemp)
      .then((response) => {
        console.log(response.data);
        alert(`Driver added successfully`);
      })
      .catch(() => {
        alert("Driver could not be added");
        setAddDriver(new Driver());
        driverTemp = "";
      });
  };

  return (
    <div className="container">
      <center>
        {/* <p className="display-4 text-primary">Driver Component</p> */}
        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
          <p>Add New Driver</p>
          <div className="form form-group">
            <input
              type="text"
              id="driverName"
              name="driverName"
              className="form-control mb-3 mt-3"
              value={addDriver.driverName}
              onChange={handleAddDriver}
              placeholder="Enter Driver Name"
            />
            <input
              type="text"
              name="licenseNo"
              id="licenseNo"
              className="form-control mb-3 mt-3"
              value={addDriver.licenseNo}
              onChange={handleAddDriver}
              placeholder="Enter license Number"
            />
            <input
              type="text"
              id="rating"
              name="rating"
              className="form-control mb-3 mt-3"
              value={addDriver.rating}
              onChange={handleAddDriver}
              placeholder="Enter Rating"
            />
            <input
              type="text"
              id="cabId"
              name="cabId"
              className="form-control mb-3 mt-3"
              value={cab.cabId}
              onChange={handleAddDriver}
              placeholder="Enter Cab Id"
            />

            <input
              type="submit"
              className="btn btn-success form-control mb-3 mt-3"
              value="Add Driver"
              onClick={submitAddDriver}
            />
          </div>
        </div>
      </center>
    </div>
  );
};

export default InsertDriver;
