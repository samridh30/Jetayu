import React, { useState } from "react";
import Cab from "../../Model/Cab";
import { insertCab } from "../../services/CabService";
import { viewCabsofType } from "../../services/CabService";

const InsertCab = () => {
  const [addCab, setAddCab] = useState(new Cab());
  // const [cab, setCab] = useState(new Cab());

  const handleAddCab = (e) => {
    setAddCab({
      ...addCab,
      [e.target.name]: e.target.value,
    });
    // setAddCab({
    //   ...addCab,
    //   [e.target.status]: false,});
    // setCab({
    //   ...cab,
    //   [e.target.name]: e.target.value,
    // });
  };
  const submitAddCab = (evt) => {
    evt.preventDefault();
    // setAddCab({
    //   addCab.status=false
    // })
    let cabTemp = {
      ...addCab,
      // cab
    };
    insertCab(cabTemp)
      .then((response) => {
        console.log(response.data);
        alert(`Cab added successfully`);
      })
      .catch(() => {
        alert("Cab could not be added");
        setAddCab(new Cab());
        cabTemp = "";
      });
  };
  const [type, settype] = useState("");
  const [cabTypeData, setcabTypeData] = useState([]);
  const handletripTypeData = (e) => {
    console.log(e.target.value);
    settype(e.target.value);
  };

  return (
    <div>
      <center>

        <div>
          <div class="text-center">
            <label className="text-drak">
              <h3>Choose Cab Type</h3>
            </label>
            <select
              className="form-select col-lg-12 px-2 w-100 m-auto mb-2"
              value={addCab.carType}
              onChange={handletripTypeData}
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
          </div>
          {/* <div className="card mt-3 ml-3">
      <div className="card-body text-left roundered">
        <div>
          <h4 className="card-header">
            <center>Insert Cab</center>
            </h4>
                  
          <label>Cab Type</label>
          <input
            type="text"
            id="carType"
            name="carType"
            className="form-control mb-3 mt-3"
            
            onChange={handleAddCab}
            value={addCab.carType}
            placeholder="Enter cab type"
          /> */}
          {/* <label className="text-drak">
          <h3>Enter Cab Type</h3>
        </label>
        <select
          className="form-select col-md-3 px-2 w-100 m-auto mb-2"
          value={type}
          onChange={handletripTypeData}
          name="carType"
          placeholder="carType"
        >
          <option value="" selected>
            Choose Cab Type...
          </option>
          <option value="Mini">Mini</option>
          <option value="Auto">Auto</option>
          <option value="Luxury">Luxury</option>
        </select> */}
          <div class="text-center">
            <label>Per Km Rate</label>
            <input
              type="text"
              name="perKmRate"
              id="perKmRate"
              className="form-control mb-3 mt-3"
              value={addCab.perKmRate}
              onChange={handleAddCab}
              placeholder="Enter per km rate"
            />
          </div>
          {/* <label>Cab Status</label> */}
          {/* <input
            type="text"
            id="status"
            name="status"
            className="form-control mb-3 mt-3"
            value={addCab.status}
            onChange={handleAddCab}
            placeholder="Enter cab status"
          /> */}
          <input

            type="submit"
            className="btn btn-success form-control mt-3"
            value="Add Cab"
            onClick={submitAddCab}
          />
        </div>
      </center>
    </div>


  );
};

export default InsertCab;