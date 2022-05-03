import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverById } from "../../Redux/DriverSlice";
import { updateDriver } from "../../Services/DriverService";
import { setDriverList } from "../../Redux/DriverSlice";
import { viewDriver } from "../../Services/DriverService";
import { Link } from "react-router-dom";
import Driver from "../../Model/Driver";

const ViewDriver = (props) => {


  const DriverDataFromStore = useSelector((state) => state.Driver.DriverData);
  const [driverUpdate, setDriverUpdate] = useState(DriverDataFromStore);
  const [drive, setDrive] = useState(new Driver());

  useEffect(() => {

    console.log("AGAM: ", props.id.driverId)
    viewDriver(props.id.driverId)
      .then((response) => {
        dispatch(getDriverById(response.data));
        setDriverUpdate(DriverDataFromStore);
        setDrive(response.data)
        console.log("DATA: ", response.data)
      })
      .catch(() => {
        alert(`Driver with Id ${props.id.driverId} not found`);
      });
    console.log("Sajal: ", DriverDataFromStore)
  }, []);

  // setDriverUpdate(DriverDataFromStore)
  // const [driverId, setDriverId] = useState("");
  const dispatch = useDispatch();
  // const handleViewDriver = (evt) => {
  //   // setDriverId(evt.target.value);
  // };
  // const submitViewDriver = (evt) => {
  //   evt.preventDefault();

  //   setDriverId("");
  // };
  const handleUpdate = (e) => {
    e.preventDefault();
    setDrive({
      ...drive,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateDriver = (evt) => {
    console.log(driverUpdate);
    evt.preventDefault();
    console.log(drive);
    updateDriver(drive)
      .then((response) => {
        dispatch(setDriverList(response.data));
        alert("Driver Updated");
      })
      .catch(() => {
        alert("Driver cannot be updated ");
      });
    props.back()
  };

  return (
    <div className="container">
      <center>

        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
          {/* <p>Find a Driver</p>
          <div>
            <form className="form form-group">
              <input
                type="text"
                className="form-control mb-3 mt-3"
                id="driverId"
                value={driverId}
                placeholder="Enter Driver Id"
                onChange={handleViewDriver}
                autoFocus
              />
              <input
                type="submit"
                className="form-control mb-3 mt-3 btn btn-primary"
                value="Get Driver"
                onClick={submitViewDriver}
              />
            </form>
          </div> */}
          <div>
            <div className="row">
              <h1 className="text-muted">Update Driver</h1>
            </div>
            {drive.driverId && (
              <div>
                <label >Driver Name</label>
                <input
                  type="text"
                  name="driverName"
                  className="form-control"
                  onChange={handleUpdate}
                  value={drive.driverName}
                />
                <label >License Number</label>
                <input
                  type="text"
                  name="licenseNo"
                  className="form-control"
                  onChange={handleUpdate}
                  value={drive.licenseNo}
                />
                <label >Driver Rating</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  onChange={handleUpdate}
                  value={drive.rating}
                />
                <label >Cab Id</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  // onChange={handleUpdate}
                  value={drive.cab.cabId}
                  disabled
                />

                <div className="flex">
                  <input
                    type="submit"
                    className="btn btn-success form-control mt-3"
                    value="Update"
                    onClick={submitUpdateDriver}
                  />
                  <input
                    type="submit"
                    className="btn btn-danger form-control mt-3"
                    value="Cancel"
                    onClick={props.back}
                  />


                </div>

                {/* <p className="text-primary text-center font-weight-bold lead">
                Driver Details
              </p>
              <p>Driver id: {DriverDataFromStore.driverId}</p>
              <p>
                Driver Name:
                {DriverDataFromStore.driverName}
              </p>
              <p>License No: {DriverDataFromStore.licenseNo}</p>
              <p>
                Rating:
                {DriverDataFromStore.rating}
              </p>
              {DriverDataFromStore.cab && (
                <div>
                  <p>
                    Cab Id:
                    {DriverDataFromStore.cab.cabId}
                  </p>
                  <p>
                    Cab Type:
                    {DriverDataFromStore.cab.carType}
                  </p>
                  <p>
                    Rate:
                    {DriverDataFromStore.cab.perKmRate}
                  </p>
                </div>
              )} */}
              </div>
            )}
          </div>
        </div>
      </center>
    </div >
  );
};

export default ViewDriver;