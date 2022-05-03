import React, { useState } from "react";
import '../../Styles/Trip.css'
import { viewCabsofType } from "../../Services/CabService";

const ViewCabsofType = (props) => {
  const [type, setType] = useState("");
  const [cabTypeData, setcabTypeData] = useState([]);
  const [head, setHead] = useState();

  const handletripTypeData = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
    // viewCabsofType(type)
    //   .then((response) => {
    //     console.log(response.data);
    //     setcabTypeData(response.data);
    //   })
    //   .catch((error) => {
    //     alert("Select a Cab Type");
    //   });
  };

  const GetCabsByType = (evt) => {
    evt.preventDefault();
    console.log(type);
    setHead(type)
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

    <div className="container m-auto col-sm-6">
      <center>
        <div className="">
          {/* <label className="text-drak">
            <h3>Enter Cab Type</h3>
          </label> */}
          <select
            className="col form-select w-100 px-2 mb-2"
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
            className="btn-success btn px-2 w-100 m-auto mb-3"
            value="Get Cab"
            onClick={GetCabsByType}
          />
        </div>
        <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 scrollit-nav">
          <p className="text-dark text-center font-weight-bold lead">
            {head}
          </p>
          {cabTypeData.length >= 1 && (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>cabId</th>
                  <th>carType</th>
                  <th>perKmRate</th>
                  <th>status</th>
                  <th>Edit</th>
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
      </center >
    </div>
  );
};

export default ViewCabsofType;