import React, { useState } from "react";
import { viewCabsofType } from "../../services/CabService";

const ViewCabsofType = (props) => {
  const [type, settype] = useState("");
  const [cabTypeData, setcabTypeData] = useState([]);

  const handletripTypeData = (e) => {
    console.log(e.target.value);
    settype(e.target.value);
  };

  const GetCabsByType = (evt) => {
    console.log(type);
    evt.preventDefault();
    viewCabsofType(type)
      .then((response) => {
        console.log(response.data);
        setcabTypeData(response.data);
      })
      .catch((error) => {
        alert("Select a Cab Type");
      });
  };

  return (
    <div>
      <div>
        <label className="text-drak">
          <h3>Enter Cab Type</h3>
        </label>
        <select
          className="form-select col-md-12 px-2 w-100 m-auto mb-2"
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
        </select>
        <input
          type="submit"
          placeholder="Get Cabs"
          className="btn-success col-md-12 px-2 w-100 m-auto mb-3"
          value="Get Cab"
          onClick={GetCabsByType}
        />
      </div>
      {cabTypeData.length >= 1 && (
        <table className="table table-bordered table-light table-striped col-lg-6 m-auto">
          <thead className="thead-dark">
            <tr>
              <th>cabId</th>
              <th>carType</th>
              <th>perKmRate</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {cabTypeData.map((e, index) => (
              <tr key={index}>
                <td>{e.cabId}</td>
                <td>{e.carType}</td>
                <td>{e.perKmRate}</td>
                <td>{e.status.toString()}</td>
                
              </tr>
            </thead>
            <tbody>
              {cabTypeData.map((e, index) => (
                <tr key={index}>
                  <td>{e.cabId}</td>
                  <td>{e.carType}</td>
                  <td>{e.perKmRate}</td>
                  <td>{e.status.toString()}</td>
                  <td><button onClick={() => props.dash(e)} className="btn btn-danger py-0">Edit</button></td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </center>
  );
};
export default ViewCabsofType;
