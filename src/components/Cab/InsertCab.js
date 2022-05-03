import React, { useState } from "react";
import Cab from "../../Model/Cab";
import { insertCab } from "../../Services/CabService";
import { viewCabsofType } from "../../Services/CabService";

const InsertCab = () => {
  const [addCab, setAddCab] = useState(new Cab());
  // const [cab, setCab] = useState(new Cab());

  const handleAddCab = (e) => {
    setAddCab({
      ...addCab,
      [e.target.name]: e.target.value,
    });

  };
  const submitAddCab = (evt) => {
    evt.preventDefault();

    console.log(addCab)
    if (addCab.perKmRate !== "" && addCab.carType !== "") {
      insertCab(addCab)
        .then((response) => {
          console.log(response.data);
          alert(`Cab added successfully`);
        })
        .catch(() => {
          alert("Cab could not be added");
          setAddCab(new Cab());
        });
    }
    else {
      alert("Enter Details")
    }
  }

  return (

    <div className="container m-auto col-sm-4">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 " style={{ borderRadius: "10px" }}>
        <center>
          <p className="text-dark text-center font-weight-bold lead">
            Add New Cab
          </p>
          <div class="text-center">
            {/* <label className="text-drak">
              Choose Cab Type
            </label> */}
            <select
              className="form-select px-2 w-100 m-auto mb-2"
              value={addCab.carType}
              onChange={handleAddCab}
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

          <div class="text-center">
            {/* <label>Per Km Rate</label> */}
            <input
              type="text"
              name="perKmRate"
              id="perKmRate"
              className="form-control mb-3 mt-3"
              value={addCab.perKmRate}
              onChange={handleAddCab}
              placeholder="Enter per km rate..."
            />
          </div>

          <input

            type="submit"
            className="btn btn-success form-control mt-3"
            value="Add Cab"
            onClick={submitAddCab}
          />
        </center>
      </div>
    </div>


  );
};

export default InsertCab;