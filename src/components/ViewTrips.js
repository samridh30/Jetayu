import { useState } from "react";
import Trip from '../Model/Trip';
import driver from '../Model/driver';
import {bookCabService, updateTripService,viewTripService,endTripService} from '../services/TripService'
import  { setTripList, getTripsList } from '../redux/TripSlice'
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';

const ViewTrips = () =>{
    const TripsListStore = useSelector((state) => state.Trip.TripsList);
    const TripListStore = useSelector((state) => state.Trip.TripList);
    const dispatch = useDispatch();

 
// fetching trips history for a customer
    const submitGetTripById = (evt) => {
        evt.preventDefault();
        viewTripService()
            .then((response) => {
                dispatch(getTripsList(response.data));
            })
            .catch((error) => {
                alert(error);
            })
    }


  
// to end ride for a customer
    const endCab= (e) =>{
        e.preventDefault();
        endTripService().then((response)=>{
            // console.log(booktrip.fromLocation+"  ended");
            console.log(response);
            console.log(response.data.customer.userName);
            alert(response.data.customer.userName+" Your Trip Ended ");

        })
        .catch(()=>{
            alert("cab could not be ended")
        })
    }


    return(
        <div className='container' >
            <div className="row">
                <div className="bg-white shadow shadow-regular mb-3 mt-3 ml-0 px-3 py-3 pb-3 pt-3  col-lg-2">
                    <div className="form form-group " >
                        <input 
                            type="submit" 
                            className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                            data-toggle="collapse"
                            data-target="#gettrips" 
                            value="Get Trips" 
                            onClick={submitGetTripById} />
                        <input
                            type="submit"
                            className='form-control mb-3 mt-3 btn btn-primary"'
                            value="Update Trip"
                            />

                        <input
                            type="submit"
                            className='form-control mb-3 mt-3 btn btn-primary'
                            value="End Trip"
                            onClick={endCab}

                            />
                    </div>
            {/* <div >
                <div className='row'>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                           
                            <tr>
                                <th>tripBooking Id</th>
                                <th>From Location</th>
                                <th>To Location</th>
                                <th>Bill</th>
                                <th>driver Id</th>
                                <th>driver rating</th>
                                <th>Cab Type</th>
     
                            </tr>
                            
                                          
                      </thead>
                      <tbody>
                          {
                              TripsListStore.map((e)=>
                              <tr key={e.tripBookingId}>
                                  <td>{e.tripBookingId}</td>
                                  <td>{e.fromLocation}</td>
                                  <td>{e.toLocation}</td>
                                  <td>{e.bill}</td>
                                  <td>{e.driver.driverId}</td>
                                  <td>{e.driver.rating}</td>
                                  <td>{e.driver.cab.carType}</td>
                                  
                                  
                              </tr>

                              )
                          }
                      </tbody>
                  
                    </table>
                </div>
            
            </div> */}
            </div>

            <div className="col-lg-6 " id="gettrips">
                {  
                     TripsListStore.map((e,index)=>
                     <div className="card mt-3 ">
                        <div className="card-body text-left roundered">
                            <div>
                            <p className=" card-header text-center ">Trip Count- {index}</p>
                            <p>TripBookingId- {e.tripBookingId}</p>
                            <p>FromLocation- {e.fromLocation}</p>
                            <p>toLocation- {e.toLocation}</p>
                            {/* <input
                            type="submit"
                            className="btn btn-success form-control  href=tripdata  "
                            data-toggle="collapse"
                            data-target="#tripdata"
                            value="view"/> */}

                            <div >
                            <p>Bill- {e.bill}</p>
                            <p>driverId- {e.driver.driverId}</p>
                            <p>DriverRating- {e.driver.rating}</p>
                            <p>CabType- {e.driver.cab.carType}</p>
                            </div>
                            </div>

                        </div>
                    </div>

                     )

                     

                }
            </div>

            <div className="col-lg-6 " id="bookingdetails">
                <div className="card mt-3">
                    <div class="card-body text-left roundered">
                        <div>
                        <h4 className="card-header text-center">Booking Details</h4>
                            {/* <p>TripBookingId- {TripListStore.tripBookingId}</p> */}
                            <p>FromLocation- {TripListStore.fromLocation}</p>
                            <p>toLocation- {TripListStore.toLocation}</p>
                            <p>Bill- {TripListStore.bill}</p>
                            <p>driverId- {TripsListStore.driverId}</p>
                            <p>DriverRating- {TripsListStore.rating}</p>
                            <p>CabType- {TripsListStore.cartype}</p>
                        {/* <ul class="list-group list-group-flush">
                            <li class="list-group-item">FromLocation :{TripsListStore.fromLocation}</li>
                            <li class="list-group-item">ToLocation :{TripsListStore.toLocation}</li>
                            <li class="list-group-item">Bill: {TripsListStore.bill}</li>
                            <li class="list-group-item">BookedTime :{TripsListStore.fromDateTime}</li>
                        </ul> */}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
        
    )
}
export default ViewTrips;