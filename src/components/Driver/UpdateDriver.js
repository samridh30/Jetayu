import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDriver } from "../../services/DriverService";
import { setDriverList } from "../../redux/DriverSlice";


const UpdateDriver = () => {
  const CurrentDriverListStore = useSelector(
    (state) => state.Driver.DriverData
  );
  useEffect(()=>{
    console.log(CurrentDriverListStore)

  },[])
  const [driverUpdate, setDriverUpdate] = useState(CurrentDriverListStore);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    setDriverUpdate({
      ...driverUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateDriver = (evt) => {
    evt.preventDefault();
    console.log(driverUpdate)
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
              <center>Update Driver </center>
            </h4>
            <label>Driver Id</label>
            <input
              type="text"
              name="Driver Id"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.driverId}
            />
            <label>Driver Name</label>
            <input
              type="text"
              name="Driver Name"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.driverName}
            />
            
            <label>License No</label>
            <input
              type="text"
              name="License No"
              className="form-control"
              onChange={handleUpdate}
              value={driverUpdate.licenseNo}
            />
            
            <label>Rating</label>
            <input
              type="text"
              name="Rating"
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
