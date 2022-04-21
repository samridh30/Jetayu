import { useState } from "react";
import Trip from '../Model/Trip';
import driver from '../Model/driver';
import {bookCabService, updateTripService,viewTripService,endTripService} from '../services/TripService'
import  { setTripList, getTripsList } from '../redux/TripSlice'
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';

const ViewTrips = () =>{
    const TripsListStore = useSelector((state) => state.Trip.TripsList);
    const[trip, setTrip]=useState([]);
    const[id,setId]=useState('');
    const[perpage, setperpage]=useState(TripsListStore.slice(0,5));
    const[pageNumber,setPageNumber]=useState(0);

    const tripsperpage=5;

    const pagesVisited= pageNumber* tripsperpage
    const dispalytrips= perpage.slice(pagesVisited,pagesVisited+tripsperpage).map(()=><h1>Drikav</h1>)

    const dispatch = useDispatch();

    // {setperpage(TripsListStore.data.slice(0,5));}
    const submitGetTripById = (evt) => {
        // console.log(evt.data);
        evt.preventDefault();
        viewTripService()
            .then((response) => {
                // console.log(response.data);
                dispatch(getTripsList(response.data));
                // setTrip(response.data);
            })
            .catch((error) => {
                alert(error);
            })
    }

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setId(evt.target.value);
    }

    return(
        <div className='container' >
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-5">
            <div className="form form-group" >
            <input type="submit" className="form-control mb-3 mt-3 btn btn-primary" value="Get Trips" onClick={submitGetTripById} />
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

            <div className="row">
                {  
                     TripsListStore.map((e,index)=>
                     <div class="card mt-3 ">
                        <div class="card-body text-left roundered">
                            <div>
                            <p className=" card-header text-center ">Trip Count- {index}</p>
                            <p>TripBookingId- {e.tripBookingId}</p>
                            <p>FromLocation- {e.fromLocation}</p>
                            <p>toLocation- {e.toLocation}</p>
                            <input
                            type="submit"
                            className="btn btn-success form-control  href=tripdata  "
                            data-toggle="collapse"
                            data-target="#tripdata"
                            value="view"/>

                            <div className="collapse" id="tripdata">
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

           
            </div>
            

    </div>
        
    )
}
export default ViewTrips;