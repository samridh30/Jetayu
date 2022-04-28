import React, { useState } from "react";
import { countCabsofType, viewCabsofType } from "../../services/CabService";
import { useDispatch, useSelector } from "react-redux";

const ViewCabsofType = () => {
  const [type, settype] = useState("");
  const [cabTypeData, setcabTypeData] = useState([]);
  const dispatch = useDispatch();

  const handletripTypeData = (e) => {
    console.log(e.target.value)
    settype(e.target.value);
  };

  const GetCabsByType = (evt) => {
    console.log(type)
    evt.preventDefault();
    viewCabsofType(type)
      .then((response) => {
        // dispatch(setAllTripsList(response.data));
        console.log(response.data)
        setcabTypeData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
        <p>View Cabs of Type</p>
        <div className="form form-group">
          <input
            type="button"
            className="btn btn-primary form-control mb-3 mt-3"
            value="View Cabs of Type"
            onClick={submitViewCabsofType}
          />
        </div>
        <div>
          <div>
            {(allCabDataFromStore.length !== 0) && 
              <div>
                <p className="text-primary text-center font-weight-bold lead">
                  Cab Types
                </p>
                {
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cab Id</th>
                        <th>Car Type</th>
                      </tr>
                    </thead>
                    {allCabDataFromStore.map((e => 
                      <tbody>
                        <tr>
                          <td>{e.cabId}</td>
                          <td>{e.carType}</td>
                          {/* {(e.cab) && 
                            <>
                              <td>{e.cab.ca}</td>
                              <td>{e.cab.carType}</td>
                              <td>{e.cab.perKmRate}</td>
                            </>
                          } */}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCabsofType
