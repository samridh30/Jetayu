import React, { useState, useEffect } from "react";
import Driver from "../../Model/Driver";
import Cab from "../../Model/Cab";
import { insertDriver } from "../../Services/DriverService";
import { viewAllDrivers } from "../../Services/DriverService";
import { getAllDrivers } from "../../Redux/DriverSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailableCabs, viewAllCabs } from "../../Services/CabService";




const InsertDriver = () => {

  const dispatch = useDispatch();

  const [addDriver, setAddDriver] = useState(new Driver());
  const [cab, setCab] = useState(new Cab());

  const [avail, setAvail] = useState([]);

  useEffect(() => {
    // console.log("Test: ", props.test)
    fetchAvailableCabs().then((response) => {
      console.log(typeof (response.data))
      setAvail(response.data)
    })
    // const tmp = 
  }, [cab])

  const handleAddDriver = (e) => {
    setAddDriver({
      ...addDriver,
      status: false,
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

    console.log(driverTemp)
    insertDriver(driverTemp)
      .then((response) => {
        console.log(response.data);
        alert(`Driver added successfully`);
      })
      .catch(() => {
        alert("Driver could not be added");
      });
    setAddDriver({
      driverName: "",
      licenseNo: "",
      rating: ""
    });
    setCab({
      cabId: ''
    })
    driverTemp = "";
  };

  return (
    <div className="container m-auto col-sm-8">

      <center>
        {/* <p className="display-4 text-primary">Driver Component</p> */}
        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6" style={{ borderRadius: "10px" }}>
          <p className="text-dark text-center font-weight-bold lead">
            Add New Driver
          </p>
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
            <select
              className="form-select col-lg-12 px-2 w-100 m-auto mb-2"
              value={cab.cabId}
              onChange={handleAddDriver}
              name="cabId"
              placeholder="cabId"
            >
              <option value="" selected>
                Choose Cab Id...
              </option>
              {Object.keys(avail).map((item, i) => {
                return (
                  <option value={avail[item]} key={i}>
                    {avail[item]}
                  </option>
                )
              })}

            </select>
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
