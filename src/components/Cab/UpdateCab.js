import React, { useEffect, useState } from "react";
import Cab from "../../Model/Cab";
import { useDispatch, useSelector } from "react-redux";
import { setCabList } from "../../redux/CabSlice";
import { fetchCabById, updateCab } from "../../services/CabService";

const UpdateCab = (props) => {
  // const CurrentCabListStore = useSelector((state) => state.Cab.CabData);
  const [cabUpdate, setCabUpdate] = useState({});
  useEffect(() => {
    console.log(props.id.cabId)

    fetchCabById(props.id.cabId)
      .then((response) => {
        console.log(response.data)
        // dispatch(getCabById(response.data))
        setCabUpdate(response.data);

      }).catch(() => {
        alert(`Cab with Id ${props.id.driverId} not found`);
        // props.back();
      });

  }, [])
  const dispatch = useDispatch();



  const handleUpdate = (e) => {
    e.preventDefault();
    setCabUpdate({
      ...cabUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const submitUpdateCab = (evt) => {
    evt.preventDefault();
    console.log(cabUpdate)
    updateCab(cabUpdate)
      .then((response) => {
        dispatch(setCabList(response.data));
        alert("Cab Updated");
      })
      .catch(() => {
        alert("Cab cannot be updated ");
      })
    props.back()
  };
  return (
    <center>
      <div className="w-100 m-auto">

        <div className="card mt-3 ml-3">
          <div className="card-body text-left">
            <div>
              <h4 className="card-header">
                <center>Update Cab </center>
              </h4>

              <label>Cab Id</label>
              <input
                type="text"
                name="cabId"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.cabId}
                disabled
              />


              <label>Cab type</label>
              <input
                type="text"
                name="carType"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.carType}
              />


              <label>Per Km Rate</label>
              <input
                type="text"
                name="perKmRate"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.perKmRate}
              />

              {/* <label>Status</label>
            <input
              type="text"
              name="status"
              className="form-control"
              onChange={handleUpdate}
              value={cabUpdate.status}
            /> */}


              <input
                type="submit"
                className="btn btn-success form-control mt-3"
                value="Update"
                onClick={submitUpdateCab}
              />
              <input
                type="submit"
                className="btn btn-danger form-control mt-3"
                value="Cancel"
                onClick={props.back}
              />

            </div>
          </div>
        </div>
      </div >
    </center>
  );
};


export default UpdateCab;


// const UpdateCab = () => {
//   const CabDataFromStore = useSelector((state) => state.Cab.CabData);
//   // const [cabUpdate, setCabUpdate] = useState(CabDataFromStore);
//   const [cabId, setcabId] = useState(CabDataFromStore);
//   const dispatch = useDispatch();
//   // const UpdateCab = () => {
//   //   const CabDataFromStore = useSelector(
//   //     (state) => state.Cab.CabData
//   //   );

//     const [cabUpdate, setCabUpdate] = useState(CabDataFromStore);
//     // const handleUpdateCab = (evt) => {
//     //   // setCabId(evt.target.value);
//     // };
//     const handleUpdate = (e) => {
//       e.preventDefault();
//       setCabUpdate({
//         ...cabUpdate,
//         [e.target.name]: e.target.value,
//       });
//       console.log(cabUpdate.cabId);
//       console.log(cabUpdate.carType);
//     };
//     const submitUpdateCab = (evt) => {
//       evt.preventDefault();
//       // console.log(response.data)
//       updateCab(cabUpdate)
//         .then((response) => {
//           dispatch(getCabById(response.data));
//           alert("Cab Updated");
//         })
//         .catch(() => {
//           alert("Cab cannot be updated ");
//         });
//     };