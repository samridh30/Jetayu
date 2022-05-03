import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDriver } from "../../services/DriverService";
import { setDriverList } from "../../redux/DriverSlice";

const UpdateDriver = (props) => {
  const CurrentDriverListStore = useSelector(
    (state) => state.Driver.DriverData
  );
  const [driverUpdate, setDriverUpdate] = useState(props.driverId);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(CurrentDriverListStore);

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    setDriverUpdate({
      ...driverUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateDriver = (evt) => {
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
    <div>
      <div className="card mt-3 ml-3">
        <div className="card-body text-left roundered">
          <div>
            <h4 className="card-header">
              <center><p> Update Driver</p> </center>
            </h4>
            <label>Driver Id</label>
            <input
              type="text"
              name="driverId"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.driverId}
            />
            <label>Driver Name</label>
            <input
              type="text"
              name="driverName"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.driverName}
            />

            <label>License No</label>
            <input
              type="text"
              name="licenseNo"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.licenseNo}
            />

            <label>Rating</label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDriver;
