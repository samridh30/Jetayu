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