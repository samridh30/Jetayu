import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../../Redux/DriverSlice";

import { viewAllDrivers } from "../../Services/DriverService";

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
    <div className="container p-1">
      <center>

        <div className="scrollit" >
          <div className="bg-white shadow shadow-regular mx-3 my-3">
            <div>
              {allDriverDataFromStore.length !== 0 && (
                <div className="p-1 w-auto">
                  <p className="text-dark text-center font-weight-bold lead">
                    List of All Drivers
                  </p>

                  <table className="table border border-dark">
                    <thead className="thead-dark">
                      <tr>
                        <th>Driver Id</th>
                        <th>Driver Name</th>
                        <th>License No</th>
                        <th>Rating</th>
                        <th>Cab Id</th>
                        <th>Cab Type</th>
                        <th>Per Km Rate</th>
                        <th>Status</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    {allDriverDataFromStore.map((e) => (
                      <tbody>
                        <tr>
                          <td>{e.driverId}</td>
                          <td>{e.driverName}</td>
                          <td className="text-truncate">{e.licenseNo}</td>
                          <td>{e.rating}</td>
                          {e.cab && (
                            <>
                              <td>{e.cab.cabId}</td>
                              <td>{e.cab.carType}</td>
                              <td>{e.cab.perKmRate}</td>
                            </>
                          )}
                          <td>{e.status.toString()}</td>
                          <td><button onClick={() => props.dash(e)} className="btn btn-danger py-0">Edit</button></td>
                        </tr>
                      </tbody>
                    ))}
                  </table>

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
