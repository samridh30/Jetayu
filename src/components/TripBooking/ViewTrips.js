import { bookCabService, updateTripService, viewTripService, endTripService } from '../../services/TripService'
import { setAllTripsList } from '../../redux/TripSlice'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { setTripList } from '../../redux/TripSlice'
import loaddash from 'lodash';

const pagesize = 5;
const ViewTrips = () => {
    const AllTripsListStore = useSelector((state) => state.Trip.AllTripsList);
    const CurrentTripListStore = useSelector((state) => state.Trip.TripList);
    const [show, setshow] = useState({
        getTrip: false,
        update: false,
        bookingdetails: true,
        endTrip: true
    })
    const [paginatedPosts, setpaginatedPosts] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    useEffect(() => {
        setpaginatedPosts(loaddash(AllTripsListStore).slice(0).take(pagesize).value())
        bookingdetails();

    }, [])

    const dispatch = useDispatch();
    const pageCount = AllTripsListStore ? Math.ceil(AllTripsListStore.length / pagesize) : 0;
    const [currenttripupdate, setcurrenttripupdate] = useState(CurrentTripListStore);



    if (pageCount === 1) { return null; }
    const pages = loaddash.range(1, pageCount + 1);




    // fetching trips history for a customer
    const submitGetTripById = (evt) => {
        setshow({ getTrip: true, update: false, endTrip: false, bookingdetails: false })
        evt.preventDefault();
        viewTripService()
            .then((response) => {
                console.log('Page')
                console.log((response.data).slice(0));
                dispatch(setAllTripsList(response.data));
            })
            .catch((error) => {
                alert(error);
            })
    }





    // to end ride for a customer
    const endCab = (e) => {
        setshow({ getTrip: false, update: false, endTrip: true, bookingdetails: false })
        e.preventDefault();
        console.log("Trip booked data")
        setcurrenttripupdate.status = false;
        console.log(currenttripupdate)



        endTripService().then((response) => {
            // console.log(booktrip.fromLocation+"  ended");
            console.log(response);
            console.log(response.data.customer.userName);
            dispatch(setTripList(setcurrenttripupdate));
            alert(response.data.customer.userName + " Your Trip Ended ");


        })
            .catch(() => {
                alert("No Trips to End");
            })
    }
    //Handling Update Chnages
    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(e.value)
        setcurrenttripupdate({
            ...currenttripupdate, [e.target.name]: e.target.value
        })
        console.log(currenttripupdate.fromLocation);
        console.log(currenttripupdate.toLocation);


    }
    //Updateing data in Backend 
    const update = (e) => {
        e.preventDefault();
        setshow({ getTrip: false, update: true });
        updateTripService(currenttripupdate).then((response) => {
            dispatch(setTripList(response.data));
            alert("Updated")


        })
            .catch(() => {
                alert("Not Updated")

            })



    }

    const bookingdetails = () => {
        setshow({ getTrip: false, update: false, endTrip: false, bookingdetails: true })
    }

    const pagination = (pageNo) => {
        setcurrentpage(pageNo);
        const startIndex = (pageNo - 1) * pagesize;
        const paginatedPost = loaddash(AllTripsListStore).slice(startIndex).take(pagesize).value();
        setpaginatedPosts(paginatedPost)
    }



    return (
        <div className='container' >
            <div className="row">
                <div className="bg-white shadow shadow-regular mb-3 mt-3 ml-0 px-3 py-3 pb-3 pt-3  col-lg-2">
                    <div className="form form-group " >


                        <input
                            type="submit"
                            className='form-control mb-3 mt-3 btn btn-primary'
                            value="Booking details"
                            onClick={bookingdetails}

                        />


                        <input
                            type="submit"
                            className="form-control mb-3 mt-3 btn btn-primary"
                            value="update Trip"

                            onClick={update} />



                        <input
                            type="submit"
                            className="form-control mb-3 mt-3 btn btn-primary href=gettrips "
                            data-toggle="collapse"
                            data-target="#gettrips"
                            value="Get Trips"
                            onClick={submitGetTripById} />




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
                </div >
                {(show.update) &&
                    <div className='card mt-3 ml-3 col-lg-6'>
                        <div className='card-body text-left roundered'>
                            <div>
                                <h4 className='card-header'><center>Update trip </center></h4>
                                <label>FromLocation</label>
                                <input
                                    type="text"
                                    name="fromLocation"
                                    className='form-control'
                                    onChange={handleUpdate}
                                    value={currenttripupdate.fromLocation}
                                />
                                <label>To Location</label>
                                <input
                                    type="text"
                                    name="toLocation"
                                    className='form-control'
                                    onChange={handleUpdate}
                                    value={currenttripupdate.toLocation}
                                />
                                {currenttripupdate.status &&
                                    <input
                                        type="submit"
                                        className='btn btn-success form-control mt-3'
                                        value="Update"
                                        onClick={update}

                                    />
                                }

                            </div>
                        </div>

                    </div>
                }
                {(paginatedPosts && show.getTrip) &&
                    <div className="col-lg-6" id="gettrips">
                        {
                            paginatedPosts.map((e, index) =>
                                <div key={index} className="card mt-3 ">
                                    <div className="card-body text-left roundered">
                                        <div>
                                            <p className=" card-header text-center ">Trip details</p>
                                            <p>TripBookingId- {e.tripBookingId}</p>
                                            <p>FromLocation- {e.fromLocation}</p>
                                            <p>ToLocation- {e.toLocation}</p>

                                            <div >
                                                <p>Bill- {e.bill}</p>
                                                <p>DriverName- {e.driver.driverName}</p>
                                                <p>DriverRating- {e.driver.rating}</p>
                                                <p>CabType- {e.driver.cab.carType}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                        {(show.getTrip) &&
                            <nav className='d-flex justify-content-center mt-3'>

                                <ul className='pagination'>
                                    {
                                        pages.map((page) => (
                                            <li className={
                                                page === currentpage ? "page-item active" : "page-item"
                                            }>
                                                <p className='page-link'
                                                    onClick={() => pagination(page)}
                                                >{page}</p></li>

                                        ))
                                    }

                                </ul>
                            </nav>
                        }





                    </div>
                }
                {(show.bookingdetails) &&
                    <div className="col-lg-6 " id="bookingdetails">

                        <div className="card mt-3">
                            <div class="card-body text-left roundered">
                                <div>
                                    <h4 className="card-header text-center">Booking Details</h4>
                                    {/* <p>TripBookingId- {TripListStore.tripBookingId}</p> */}
                                    <p>FromLocation- {CurrentTripListStore.fromLocation}</p>
                                    <p>ToLocation- {CurrentTripListStore.toLocation}</p>
                                    <p>Bill- {CurrentTripListStore.bill}</p>
                                    <p>DriverName- {CurrentTripListStore.driver.driverName}</p>
                                    <p>DriverRating- {CurrentTripListStore.driver.rating}</p>
                                    <p>CabType- {CurrentTripListStore.driver.cab.carType}</p>


                                </div>

                            </div>
                        </div>

                    </div>
                }



            </div>
        </div>

    )
}
export default ViewTrips;