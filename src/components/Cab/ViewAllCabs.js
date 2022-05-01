
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { getAllCabs } from "../../redux/CabSlice";


import { viewAllCabs } from "../../services/CabService";

// const ViewAllCabs = () => {
//   const allCabDataFromStore = useSelector(
//     (state) => state.Cab.CabList
//   );
//   const dispatch = useDispatch();
//   const submitViewAllCabs = (evt) => {
//     evt.preventDefault();
//     viewAllCabs()
//       .then((response) => {
//         dispatch(getAllCabs(response.data));
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };


const ViewAllCabs = () => {

  const [AllCabs, setAllCabs] = useState([]);

  useEffect(() => {
    viewAllCabs()
      .then((response) => {
        setAllCabs(response.data);
      })
      .catch(() => {
        alert("Error Occured");
      });
  }, [])

  // const getAllCabs = (e) => {

  // };

  return (
    <div className="container">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
        {/* <p>View All Cabs</p> */}
        {/* <div className="form form-group">
          <input
            type="button"
            className="btn btn-primary form-control mb-3 mt-3"
            value="View All Cabs"
            onClick={getAllCabs}
          />
        </div> */}
        <div>
          <div>
            {(AllCabs.length !== 0) && (
              <div>
                <p className="text-primary text-center font-weight-bold lead">
                  List of All Cabs
                </p>
                {
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cab Id</th>
                        <th>Cab type</th>
                        <th>per km rate</th>
                        <th>status</th>
                      </tr>
                    </thead>
                    {AllCabs.map((e =>
                      <tbody>
                        <tr>
                          <td>{e.cabId}</td>
                          <td>{e.carType}</td>
                          <td>{e.perKmRate}</td>
                          <td>{e.status.toString()}</td>
                          {(e.cab) &&
                            <>
                              <td>{e.cab.cabId}</td>
                              <td>{e.cab.carType}</td>
                              <td>{e.cab.perKmRate}</td>
                              <td>{e.cab.status.toString()}</td>
                            </>
                          }
                          <td></td>
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
    </div>
  );
};


export default ViewAllCabs;
