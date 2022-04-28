import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getCabType} from "../../redux/CabSlice";

import { countCabsofType } from "../../services/CabService";

const CountCabsofType = () => {
  const allCabDataFromStore = useSelector(
    (state) => state.Cab.CabList
  );
  const dispatch = useDispatch();
  const submitCountCabsofType = (evt) => {
    evt.preventDefault();
    countCabsofType()
      .then((response) => {
        dispatch(getCabType(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
        <p>Count Cabs of Type</p>
        <div className="form form-group">
          <input
            type="button"
            className="btn btn-primary form-control mb-3 mt-3"
            value="Count Cabs of Type"
            onClick={submitCountCabsofType}
          />
        </div>
        <div>
          <div>
            {(allCabDataFromStore.length !== 0) && 
              <div>
                <p className="text-primary text-center font-weight-bold lead">
                Count of Cab types
                </p>
                {
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Count of cab</th>
                        <th>Car Type</th>
                      </tr>
                    </thead>
                    {allCabDataFromStore.map((e => 
                      <tbody>
                        <tr>
                          <td>{e.countCabsofType}</td>
                          <td>{e.carType}</td>
                          {/* {(e.cab) && 
                            <>
                              <td>{e.cab.ca}</td>
                              <td>{e.cab.carType}</td>
                              <td>{e.cab.perKmRate}</td>
                            </>
                          } */}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountCabsofType
=======
// import React, { useState } from 'react'
// import { countCabsofType } from '../../services/CabService';
// import { useDispatch, useSelector } from "react-redux";

// const CountCabsofType = () => {
//   const CurrentTripListStore = useSelector((state) => state.Trip.TripList);

//   const[type,settype]=useState('');
//   const[cabTypeData,setcabTypeData]=useState([])
//   const dispatch = useDispatch();

//   const handletripTypeData = (e) => {
//     settype(e.target.value);
//   };

//   const GetCabsByType= (evt) => {
//     evt.preventDefault();
//     countCabsofType(type)
//       .then((response) => {
//         // dispatch(setAllTripsList(response.data));
//         setcabTypeData(response.data);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };

//   return (
//     <div>
//        <input
//           type="text"
//           placeholder="Enter Cab Type"
//           className="form-control col-md-auto px-2 w-100"
//           value={type}
//           onChange={handletripTypeData}
//         />
      
//     </div>
//   )
// }

// export default CountCabsofType
