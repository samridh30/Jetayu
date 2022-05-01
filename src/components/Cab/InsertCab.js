import React, { useState } from "react";
import Cab from "../../Model/Cab";
import { insertCab } from "../../services/CabService";

const InsertCab = () => {
  const [addCab, setAddCab] = useState(new Cab());
  // const [cab, setCab] = useState(new Cab());

  const handleAddCab = (e) => {
    setAddCab({
      ...addCab,
      [e.target.name]: e.target.value,
    });
    // setCab({
    //   ...cab,
    //   [e.target.name]: e.target.value,
    // });
  };
  const submitAddCab = (evt) => {
    evt.preventDefault();
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

  return (
    <div>
    <div className="card mt-3 ml-3">
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
            value={addCab.carType}
            onChange={handleAddCab}
            placeholder="Enter cab type"
          />
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
           <label>Cab Status</label>
          <input
            type="text"
            id="status"
            name="status"
            className="form-control mb-3 mt-3"
            value={addCab.status}
            onChange={handleAddCab}
            placeholder="Enter cab status"
          />
          <input
            type="submit"
            className="btn btn-success form-control mt-3"
            value="Add Cab"
            onClick={submitAddCab}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default InsertCab;
