import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCabById } from "../../redux/CabSlice";
import { updateCab } from "../../services/CabService";
import { setCabList } from "../../redux/CabSlice";
const UpdateCab = () => {
  const CabDataFromStore = useSelector((state) => state.Cab.CabData);
  const [cabUpdate, setCabUpdate] = useState(CabDataFromStore);
  const [driverId, setDriverId] = useState("");
  const dispatch = useDispatch();
  const UpdateCab = () => {
    const CurrentCabListStore = useSelector(
      (state) => state.Cab.CabData
    );
    useEffect(()=>{
      console.log(CurrentCabListStore)
  
    },[])
    const [cabUpdate, setCabUpdate] = useState(CurrentCabListStore);
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
        });
    };
  
    return (
      <div>
        <div className="card mt-3 ml-3">
          <div className="card-body text-left roundered">
            <div>
              <h4 className="card-header">
                <center>Update Cab </center>
              </h4>
              <label>Cab Id</label>
              <input
                type="text"
                name="Cab Id"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.cabId}
              />
              <label>Cab type</label>
              <input
                type="text"
                name="Car Type"
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
              
              <label>Status</label>
              <input
                type="text"
                name="status"
                className="form-control"
                onChange={handleUpdate}
                value={cabUpdate.status}
              />
              
               
                <input
                  type="submit"
                  className="btn btn-success form-control mt-3"
                  value="Update"
                  onClick={submitUpdateCab}
                />
              
            </div>
          </div>
        </div>
      </div>
    );
  };
}
  
  export default UpdateCab;
  