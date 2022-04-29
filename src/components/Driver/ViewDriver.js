import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverById } from "../../redux/DriverSlice";
import { updateDriver } from "../../services/DriverService";
import { setDriverList } from "../../redux/DriverSlice";
import { viewDriver } from "../../services/DriverService";
const ViewDriver = () => {
  const DriverDataFromStore = useSelector((state) => state.Driver.DriverData);
  const [driverUpdate, setDriverUpdate] = useState(DriverDataFromStore);
  useEffect(()=>{
    setDriverUpdate(DriverDataFromStore)
  },[DriverDataFromStore])
  // setDriverUpdate(DriverDataFromStore)
  const [driverId, setDriverId] = useState("");
  const dispatch = useDispatch();
  const handleViewDriver = (evt) => {
    setDriverId(evt.target.value);
  };
  const submitViewDriver = (evt) => {
    evt.preventDefault();
    viewDriver(driverId)
      .then((response) => {
        dispatch(getDriverById(response.data));
      })
      .catch(() => {
        alert(`Driver with Id ${driverId} not found`);
      });
    setDriverId("");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setDriverUpdate({
      ...driverUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateDriver = (evt) => {
    console.log(driverUpdate)
    evt.preventDefault();
    console.log(driverUpdate);
    updateDriver(driverUpdate)
      .then((response) => {
        dispatch(setDriverList(response.data));
        alert("Driver Updated");
      })
      .catch(() => {
        alert("Driver cannot be updated ");
      });
  };

  return (
    <div className="container">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
        <p>Find a Driver</p>
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
        </div>
        <div>
          {DriverDataFromStore.driverId && (
            <div>
              <input
                type="text"
                name="driverName"
                className="form-control"
                onChange={handleUpdate}
                value={driverUpdate.driverName}
              />
              <input
                type="text"
                name="licenseNo"
                className="form-control"
                onChange={handleUpdate}
                value={driverUpdate.licenseNo}
              />
              <input
                type="text"
                name="rating"
                className="form-control"
                onChange={handleUpdate}
                value={driverUpdate.rating}
              />
              <input
                type="submit"
                className="btn btn-success form-control mt-3"
                value="Update"
                onClick={submitUpdateDriver}
              />

              <p className="text-primary text-center font-weight-bold lead">
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDriver;
