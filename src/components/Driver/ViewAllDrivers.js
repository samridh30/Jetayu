import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../../redux/DriverSlice";

import { viewAllDrivers } from "../../services/DriverService";

const ViewAllDrivers = (props) => {
  const allDriverDataFromStore = useSelector(
    (state) => state.Driver.DriverList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Test: ", props.test)
    viewAllDrivers()
      .then((response) => {
        dispatch(getAllDrivers(response.data));
      })
      .catch((error) => {
        alert(error);
      });

  }, [])

  // const submitViewAllDrivers = (evt) => {
  //   evt.preventDefault();

  // };

  return (
    <div className="container">
      <center>

        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3">
          {/* <p>Get All Drivers</p>
        <div className="form form-group">
          <input
            type="button"
            className="btn btn-primary form-control mb-3 mt-3"
            value="Get All Drivers"
            onClick={submitViewAllDrivers}
          />
        </div> */}
          <div>
            <div>
              {allDriverDataFromStore.length !== 0 && (
                <div>
                  <p className="text-dark text-center font-weight-bold lead">
                    List of All Drivers
                  </p>
                  {
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th>Driver Id</th>
                          <th>Driver Name</th>
                          <th>License No</th>
                          <th>Rating</th>
                          <th>Cab Id</th>
                          <th>Cab Type</th>
                          <th>Per Km Rate</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      {allDriverDataFromStore.map((e) => (
                        <tbody>
                          <tr>
                            <td>{e.driverId}</td>
                            <td>{e.driverName}</td>
                            <td>{e.licenseNo}</td>
                            <td>{e.rating}</td>
                            {e.cab && (
                              <>
                                <td>{e.cab.cabId}</td>
                                <td>{e.cab.carType}</td>
                                <td>{e.cab.perKmRate}</td>
                              </>
                            )}
                            <td><button onClick={() => props.dash(e)} className="btn btn-danger py-0">Edit</button></td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ViewAllDrivers;
