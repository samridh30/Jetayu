
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { getAllCabs } from "../../redux/CabSlice";
import '../../styles/Trip.css';


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


const ViewAllCabs = (props) => {

  const [AllCabs, setAllCabs] = useState([]);

  useEffect(() => {
    viewAllCabs()
      .then((response) => {
        setAllCabs(response.data);
      })
      .catch(() => {
        alert("Error Occured");
      });
  }, [AllCabs])

  // const getAllCabs = (e) => {

  // };

  return (

    <center>
      <div className="scrollit">
        <div className="bg-white shadow shadow-regular mx-3 my-3">
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
                <div className="p-1">
                  <p className="text-dark text-center font-weight-bold lead">
                    List of All Cabs
                  </p>
                  {
                    <table className="table border border-dark">
                      <thead className="thead-dark">
                        <tr>
                          <th>Cab Id</th>
                          <th>Cab type</th>
                          <th>per km rate</th>
                          <th>status</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      {AllCabs.map((e =>
                        <tbody>
                          <tr>
                            <td>{e.cabId}</td>
                            <td>{e.carType}</td>
                            <td>{e.perKmRate}</td>
                            <td>{e.status.toString()}</td>
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
      </div>
    </center>
  );
};


export default ViewAllCabs;
