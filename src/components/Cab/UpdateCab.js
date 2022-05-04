import React, { useEffect, useState } from "react";
import Cab from "../../Model/Cab";
import { useDispatch, useSelector } from "react-redux";
import { setCabList } from "../../Redux/CabSlice";
import { fetchCabById, updateCab } from "../../Services/CabService";

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
    console.log(cabUpdate.carType)
    if (cabUpdate.perKmRate !== "" && cabUpdate.carType !== '') {
      // alert("OK")
      updateCab(cabUpdate)
        .then((response) => {
          dispatch(setCabList(response.data));
          alert("Cab Updated");
        })
        .catch(() => {
          alert("Cab cannot be updated ");
        })
      props.back()
    }
    else {
      alert("Enter Proper Details")
    }
  };
  return (
    <div className="container m-auto col-sm-6">
      <center>

        <div className="card mt-3 ml-3">
          <div className="card-body text-left">
            <div>
              <p className="text-dark text-center font-weight-bold lead">
                Update Cab
              </p>

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
              {/* <input
                type="text"
                name="carType"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.carType}
              /> */}
              <select
                className="form-select col-lg-12 px-2 w-100 m-auto mb-2"
                value={cabUpdate.carType}
                onChange={handleUpdate}
                name="carType"
                placeholder="carType"
              >
                <option value="" selected>
                  Choose Cab Type...
                </option>
                <option value="Mini">Mini</option>
                <option value="Auto">Auto</option>
                <option value="Luxury">Luxury</option>
              </select>


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
      </center>
    </div >
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