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
    <div className="container">
      <p className="display-4 text-primary">Cab Component</p>
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-6">
        <p>Add New Cab</p>
        <div className="form form-group">
          <input
            type="text"
            id="carType"
            name="carType"
            className="form-control mb-3 mt-3"
            value={addCab.carType}
            onChange={handleAddCab}
            placeholder="Enter cab type"
          />
          <input
            type="text"
            name="perKmRate"
            id="perKmRate"
            className="form-control mb-3 mt-3"
            value={addCab.perKmRate}
            onChange={handleAddCab}
            placeholder="Enter per km rate"
          />
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
            className="btn btn-primary form-control mb-3 mt-3"
            value="Add Cab"
            onClick={submitAddCab}
          />
        </div>
      </div>
    </div>
  );
};

export default InsertCab;
