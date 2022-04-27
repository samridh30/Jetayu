import { bookCabService } from "../../services/TripService";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { setTripList } from "../../redux/TripSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BookTrip.css";

const Booktrip = () => {
  const [booktrip, setBookTrip] = useState({
    fromLocation: "",
    toLocation: "",
    cabType: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleaddTripData = (e) => {
    console.log(e.target.value);
    setBookTrip({
      ...booktrip,
      [e.target.name]: e.target.value,
    });
  };

  const addTrip = (e) => {
    console.log(booktrip.cabType);
    e.preventDefault();
    let tripDetails = { ...booktrip };
    bookCabService(tripDetails)
      .then((response) => {
        dispatch(setTripList(response.data));
        alert("Cab Booked Succesfully");
        history.push("/");
      })
      .catch(() => {
        alert("Multiple Trips Not Allowled");
      });
  };
  return (
    // <div>
    //     <div className="container">
    //         <div className="row">
    //             <div id ="bookcabcard" className="card col-md-6 offset-md-3 offset-md-3 text-center mt-5 mb-5">
    //                 <h3 className="text-center card-header mt-2">Enter Trip details</h3>
    //                 <div className="card-body">
    //                     <form>
    //                         <div className="form-group">
    //                             <label className='card-title'>Enter Pickup Location</label>
    //                             <input
    //                                 type="text"
    //                                 placeholder="Enter pickup Location"
    //                                 name="fromLocation"
    //                                 className="form-control"
    //                                 value={booktrip.fromLocation}
    //                                 onChange={addTrip}
    //                             />
    //                             <label className='card-title'>Enter Drop Location</label>
    //                             <input
    //                                 type="text"
    //                                 placeholder="Enter drop Location"
    //                                 name="toLocation"
    //                                 className="form-control"
    //                                 value={booktrip.toLocation}
    //                                 onChange={addTrip}
    //                             />
    //                             <div className='mt:5'>
    //                                 <label className='card-title'>Select Cab Type</label>
    //                             <select className="form-select  mt:5"  value={booktrip.cabType} onChange={addTrip} name="cabType" title="select">
    //                                 <option selected >Auto</option>
    //                                 <option>Mini</option>
    //                                 <option>Luxury</option>
    //                             </select>
    //                             </div>
    //                             <input
    //                                 type="submit"
    //                                 className="btn btn-primary form-control mb-3 mt-3"
    //                                 data-toggle="collapse"
    //                                 data-target="#data"
    //                                 value="Book Cab"
    //                                 onClick={addCab}
    //                             />

    //                         </div>
    //                     </form>

    //                 </div>
    //                 <div id="data" class="collapse">
    //                 <p className="text-primary text-center font-weight-bold lead  collapse">Trip Booking Details</p>
    //                 <p>FromLocation : {TripListStore.fromLocation}</p>
    //                 <p>ToLocation :{TripListStore.toLocation}</p>
    //                 <p>BookedTime :{TripListStore.fromDateTime}</p>
    //                 {/* <p>Cab Type:{TripListStore.driver.cab.cabType}</p> */}
    //                 {/* <p>Bill:{TripListStore.driver.cab.bill}</p> */}
    //                 </div>

    //             </div>

    //         </div>

    //     </div>
    // </div>

    <div>
      <div className="container">
        <div id="block" className="row">
          <div id="BookTripBlock" className="card col-md-10 mt-5 mb-5 ">
            <div className="card-body ">
              <form>
                <div className="form-inline bg-gray ">
                  <div class="col col-lg-3">
                    {/* <label className='card-title'>Pickup</label> */}
                    <input
                      type="text"
                      placeholder="pickup Location"
                      name="fromLocation"
                      className="form-control col-md-auto"
                      value={booktrip.fromLocation}
                      onChange={handleaddTripData}
                    />
                  </div>
                  <div class=" col col-lg-3">
                    {/* <label className='card-title'>Enter Drop Location</label> */}
                    <input
                      type="text"
                      placeholder="Enter drop Location"
                      name="toLocation"
                      className="form-control col-md-auto "
                      value={booktrip.toLocation}
                      onChange={handleaddTripData}
                    />
                  </div>
                  <div className="col-lg-3">
                    <div>
                      {/* <label className='card-title'>Select Cab Type</label> */}
                      <select
                        className="form-select "
                        value={booktrip.cabType}
                        onChange={handleaddTripData}
                        name="cabType"
                      >
                        <option selected>CabType</option>
                        <option>Mini</option>
                        <option>Auto</option>
                        <option>Luxury</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="submit"
                      className="btn btn-warning form-control  href=data  "
                      data-toggle="collapse"
                      data-target="#data"
                      value="Book Cab"
                      onClick={addTrip}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div> */}

        {/* <div id="data1" class="collapse card bg-gray col-md-5 mt-5 mb-5">
                        <div className="card-body justify-content-left ">
                         <p className="text-primary text-center font-weight-bold lead  collapse">Trip Booking Details</p>
                         <p>FromLocation :{TripListStore.fromLocation}</p>
                         <p>ToLocation :{TripListStore.toLocation}</p>
                         <p>BookedTime :{TripListStore.fromDateTime}</p>
                         <p>Cab Type:{TripListStore.driver.cab.cabType}</p> 
                         <p>Bill:{TripListStore.driver.cab.bill}</p>
                         </div>
                    </div> */}

        {/* </div> */}

        {/* <div class=" Bookcard card collapse"  id="data">
                        <h4 class="card-header">Booking Details</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">FromLocation :{TripListStore.fromLocation}</li>
                            <li class="list-group-item">ToLocation :{TripListStore.toLocation}</li>
                            <li class="list-group-item">Bill: {TripListStore.bill}</li>
                            <li class="list-group-item">BookedTime :{TripListStore.fromDateTime}</li>
                        </ul>
                    </div> */}
      </div>
    </div>

    // <div className="container">
    //     <p className="display-4 text-primary">Trip Details</p>
    //     <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
    //         <p>Enter Trip Details</p>
    //         <div className="form form-group">
    //             <input
    //                 type="text"
    //                 id="fromLocation"
    //                 name="fromLocation"
    //                 className="form-control mb-3 mt-3"
    //                 value={booktrip.fromLocation}
    //                 onChange={addTrip}
    //                 placeholder="Enter PickUp Location"
    //             />
    //             <input
    //                 type="text"
    //                 id="toLocation"
    //                 name="toLocation"
    //                 className="form-control mb-3 mt-3"
    //                 value={booktrip.toLocation}
    //                 onChange={addTrip}
    //                 placeholder="Enter Drop Location"
    //             />
    //             <input
    //                 type="submit"
    //                 className="btn btn-primary form-control mb-3 mt-3"
    //                 value="Book Cab"
    //                 onClick={addCab}

    //             />
    //             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10">
    //                 <table className="table">
    //                         <thead className='thead-dark'>
    //                             <tr>
    //                                 <th>Cab Type</th>
    //                                 <th>Bill</th>
    //                                 <th>From Location</th>
    //                                 <th>To Location</th>
    //                                 <th>Driver Id</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {
    //                                 tripdata.map((e)=>{
    //                                 <tr key={e.customerId}>
    //                                     <td>{e.cabtype}</td>
    //                                     <td>{e.bill}</td>
    //                                     <td>{e.fromLocation}</td>
    //                                     <td>{e.toLocation}</td>
    //                                     <td>{e.driverId}</td>
    //                                 </tr>
    //                                 })
    //                             }
    //                         </tbody>
    //                 </table>

    //             </div>

    //         </div>

    //     </div>
    //     <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-10  ">
    //         <input
    //             type="submit"
    //             className='btn btn-primary form-control mb-3 mt-3'
    //             value="End Trip"
    //             onClick={endCab}
    //         />
    //     </div>

    // </div>

    ////////////////////////
  );
};

export default Booktrip;
